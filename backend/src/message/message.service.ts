import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

const prisma = new PrismaClient();

@Injectable()
export class MessageService {
  async create(createMessageDto: CreateMessageDto) {
    try {
      return await prisma.message.create({
        data: {
          roomId: createMessageDto.roomId,
          author: {
            connect: {
              id: createMessageDto.authorId,
            },
          },
          content: createMessageDto.content,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        return {
          statusCode: '400',
          message: 'User with specified author id could not be found',
          error: 'Bad Request',
        };
      } else {
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
    return await prisma.message.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  async findAllInRoom(roomId: string) {
    return await prisma.message.findMany({
      where: {
        roomId: roomId,
      },
      orderBy: {
        createdAt: 'asc',
      },
      include: {
        author: true,
      },
    });
  }

  async findOne(id: number) {
    return await prisma.message.findUnique({
      where: {
        id: id,
      },
      include: {
        author: true,
      },
    });
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {
    try {
      return await prisma.message.update({
        data: updateMessageDto,
        where: {
          id: id,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientValidationError)
        return {
          statusCode: '400',
          message: 'Some properties recieved are invalid',
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
    try {
      return await prisma.message.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError)
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
}
