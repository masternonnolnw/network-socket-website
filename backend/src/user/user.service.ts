import { Injectable } from '@nestjs/common';
import { PrismaClient, Role } from '@prisma/client';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  // adds a new user to the db, admin adding is permitted: only manual adding
  async create(createUserDto: CreateUserDto) {
    const now: Date = new Date();
    createUserDto.role = createUserDto.role.toLowerCase();

    if (
      createUserDto.role != null &&
      !(createUserDto.role == 'student' || createUserDto.role == 'teacher')
    ) {
      return {
        statusCode: '400',
        message: 'Role property is invalid (only "student" or "teacher")',
        error: 'Bad Request',
      };
      // TODO: properly handle error?
    }

    const role: Role =
      createUserDto.role == 'teacher' ? Role.TEACHER : Role.STUDENT;
    try {
      return await prisma.user.create({
        data: {
          createdAt: now,
          updatedAt: now,

          ...createUserDto,

          role: role,
        },
        select: {
          email: true,
          id: true,
          createdAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientValidationError)
        return {
          statusCode: '400',
          message: 'Data property is invalid',
          error: 'Bad Request',
        };
    }
  }

  async findAll() {
    return await prisma.user.findMany();
  }

  async findOne(id: number) {
    return await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        CoursesOwned: true,
        CoursesEnrolled: true,
      },
    });
  }

  async countAll() {
    return await prisma.user.count();
  }

  async getStudentCourses(studentId: number) {
    return await prisma.course.findMany({
      where: {
        students: {
          some: {
            id: {
              equals: studentId,
            },
          },
        },
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

  async getInstructorCourses(instructorId: number) {
    return await prisma.course.findMany({
      where: {
        instructorId: instructorId,
      },
      include: {
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

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      prisma.course
        .updateMany({
          data: {
            studentsCount: {
              increment: 1,
            },
          },
          where: {
            id: {
              in: updateUserDto.courseIdsToEnroll,
            },
            students: {
              none: {
                id: id,
              },
            },
          },
        })
        .then();
      return await prisma.user.update({
        data: {
          ...updateUserDto.data,
          CoursesOwned: {
            connect: updateUserDto.courseIdsToOwn
              ? updateUserDto.courseIdsToOwn.map((x) => ({ id: x }))
              : [],
          },
          CoursesEnrolled: {
            connect: updateUserDto.courseIdsToEnroll
              ? updateUserDto.courseIdsToEnroll.map((x) => ({ id: x }))
              : [],
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
          message: 'Some courses with specified course ids could not be found',
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
    return await prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
