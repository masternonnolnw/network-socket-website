import { ConsoleLogger, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaClient, Role, User } from '@prisma/client';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime';

const prisma = new PrismaClient();

@Injectable()
export class CourseService {
  async create(createCourseDto: CreateCourseDto) {
    const now = new Date();
    const instructor = await prisma.user.findUnique({
      where: {
        id: createCourseDto.instructorId,
      },
    });

    if (!instructor) {
      return {
        statusCode: '400',
        message: 'User with specified instructor id could not be found',
        error: 'Bad Request',
      };
    }

    if (instructor.role != Role.TEACHER)
      return {
        statusCode: '400',
        message:
          'User with specified instructor id does not have the instructor role',
        error: 'Bad Request',
      };

    return await prisma.course.create({
      data: {
        createdAt: now,
        updatedAt: now,

        title: createCourseDto.title,
        description: createCourseDto.description,

        instructor: {
          connect: {
            id: createCourseDto.instructorId,
          },
        },
      },
    });
  }

  async findAllExpert(id: number, msg: string) {
    // expert search
    const result = await prisma.course.findMany({
      include: {
        instructor: { select: { name: true } },
      },
    });
    const courseWithCount = result.map((course) => {
      return {
        ...course,
        subseqCount: 0,
      };
    });
    for (var i = 0; i < result.length; i++) {
      const teacher = await prisma.user.findUnique({
        where: {
          id: result[i].instructorId,
        },
      });

      let str = result[i].title + result[i].description + teacher.name;
      str.toLowerCase();
      msg.toLowerCase();

      console.log(str);
      console.log(msg);

      let subseqCount = 0;
      let msg_len = 0;
      if (msg) msg_len = msg.length;

      for (var j = 0; j < str.length; j++) {
        if (subseqCount == msg_len) break;
        if (str[j] == msg[subseqCount]) subseqCount++;
      }

      courseWithCount[i].subseqCount = subseqCount;
    }
    courseWithCount.sort((a, b) => {
      return b.subseqCount - a.subseqCount;
    });
    return courseWithCount;
  }

  async findAll(id: number, msg: string) {
    if (id) {
      const result = await prisma.course.findMany({
        where: {
          OR: [
            { title: { contains: msg, mode: 'insensitive' } },
            {
              instructor: {
                name: { contains: msg, mode: 'insensitive' },
              },
            },
            { description: { contains: msg, mode: 'insensitive' } },
          ],
        },
        include: {
          instructor: true,
          students: true,
        },
      });
      return result.map((course) => {
        return {
          ...course,
          enrolled: course.students.find((st) => st.id == id) ? true : false,
        };
      });
    }
    return await prisma.course.findMany({
      where: {
        OR: [
          { title: { contains: msg } },
          {
            instructor: {
              name: { contains: msg },
            },
          },
          { description: { contains: msg } },
        ],
      },
      include: {
        instructor: true,
      },
    });
  }

  async findOne(id: number) {
    return await prisma.course.findUnique({
      where: {
        id: id,
      },
      include: {
        instructor: {
          select: {
            email: true,
            id: true,
            createdAt: true,
            name: true,
          },
        },
        students: {
          select: {
            email: true,
            id: true,
            createdAt: true,
            name: true,
          },
        },
      },
    });
  }

  async findOneForStudent(id: number) {
    return await prisma.course.findUnique({
      where: {
        id: id,
      },
      include: {
        instructor: {
          select: {
            email: true,
            id: true,
            createdAt: true,
            name: true,
          },
        },
      },
    });
  }

  async findOneForStudentWithEnrolled(courseId: number, userId: number) {
    const res = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
      include: {
        instructor: {
          select: {
            email: true,
            id: true,
            createdAt: true,
            name: true,
          },
        },
        students: {
          where: {
            id: userId,
          },
          select: {
            id: true,
          },
        },
      },
    });
    const isEnrolled = res.students.length ? true : false;
    delete res.students;
    return {
      ...res,
      enrolled: isEnrolled,
    };
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const conflictCount = await prisma.user.count({
      where: {
        CoursesEnrolled: {
          some: {
            id: id,
          },
        },
        id: {
          in: updateCourseDto.userIdsToAdd,
        },
      },
    });
    try {
      return await prisma.course.update({
        data: {
          ...updateCourseDto.data,
          students: {
            connect: updateCourseDto.userIdsToAdd
              ? updateCourseDto.userIdsToAdd.map((x) => ({ id: x }))
              : [],
          },
          studentsCount: {
            increment: updateCourseDto.userIdsToAdd
              ? updateCourseDto.userIdsToAdd.length - conflictCount
              : 0,
          },
        },
        where: {
          id: id,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientValidationError)
        return {
          statusCode: '400',
          message: 'Data property is invalid',
          error: 'Bad Request',
        };
      else if (error instanceof PrismaClientKnownRequestError)
        return {
          statusCode: '400',
          message: 'Some users with specified user ids could not be found',
          error: 'Bad Request',
        };
      else {
        console.log(error);
        return {
          statusCode: '500',
          message: 'Some error occured while processing request',
          error: 'Internal Server Error',
        };
      }
    }
  }

  async remove(id: number) {
    return await prisma.course.delete({
      where: {
        id: id,
      },
    });
  }
}
