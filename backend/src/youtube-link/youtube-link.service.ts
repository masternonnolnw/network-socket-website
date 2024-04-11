import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { CreateYoutubeLinkDto } from './dto/create-youtube-link.dto';
import { UpdateYoutubeLinkDto } from './dto/update-youtube-link.dto';

const prisma = new PrismaClient();

@Injectable()
export class YoutubeLinkService {
  async create(
    courseId: number = null,
    createYoutubeLinkDto: CreateYoutubeLinkDto,
  ) {
    if (courseId) createYoutubeLinkDto.courseId = courseId;

    try {
      return await prisma.youtubeLinks.create({
        data: createYoutubeLinkDto,
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError)
        return {
          statusCode: '400',
          message: 'Course with specified course id could not be found',
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

  async findAll() {
    return await prisma.youtubeLinks.findMany();
  }

  async findOne(id: number) {
    return await prisma.youtubeLinks.findUnique({
      where: {
        id: id,
      },
      include: {
        course: true,
      },
    });
  }

  async findInCourse(courseId: number) {
    return await prisma.youtubeLinks.findMany({
      where: {
        courseId: courseId,
      },
    });
  }

  async update(id: number, updateYoutubeLinkDto: UpdateYoutubeLinkDto) {
    try {
      return await prisma.youtubeLinks.update({
        data: updateYoutubeLinkDto,
        where: {
          id: id,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError)
        return {
          statusCode: '400',
          message: 'Youtube link with specified id could not be found',
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
    return await prisma.youtubeLinks.delete({
      where: {
        id: id,
      },
    });
  }
}
