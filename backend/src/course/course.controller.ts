import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AuthGuard } from '@nestjs/passport';
import { Role } from '@prisma/client';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req: any, @Body() createCourseDto: CreateCourseDto) {
    // admin & teacher
    const user = req.user;
    if (user.role == Role.STUDENT) {
      throw new UnauthorizedException();
    }
    return this.courseService.create(createCourseDto);
  }

  @Get()
  findAll(
    @Request() req: any,
    @Query('id') id: string,
    @Query('msg') msg: string,
  ) {
    return this.courseService.findAll(+id, msg);
  }
  @Get('expert')
  findAllExpert(
    @Request() req: any,
    @Query('id') id: string,
    @Query('msg') msg: string,
  ) {
    return this.courseService.findAllExpert(+id, msg);
  }


  @Get(':id')
  findOne(@Request() req: any, @Param('id') id: string) {
    // teacher, admin: every information
    // student: hide other student info
    const user = req.user;
    if (user && user.role && user.role != Role.STUDENT) {
      return this.courseService.findOne(+id);
    }
    return this.courseService.findOneForStudent(+id);
  }

  @Get(':courseId/:userId')
  findOneWithEnrolled(
    @Request() req: any,
    @Param('courseId') courseId: string,
    @Param('userId') userId: string,
  ) {
    // teacher, admin: every information
    // student: hide other student info
    return this.courseService.findOneForStudentWithEnrolled(+courseId, +userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(
    @Request() req: any,
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    // admin & teacher
    const user = req.user;
    if (user.role == Role.STUDENT) {
      throw new UnauthorizedException();
    }

    return this.courseService.update(+id, updateCourseDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    // admin & teacher
    const user = req.user;
    if (user.role == Role.STUDENT) {
      throw new UnauthorizedException();
    }

    return this.courseService.remove(+id);
  }
}
