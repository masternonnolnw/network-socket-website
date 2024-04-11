import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Role } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('count')
  getUsersCount() {
    return this.userService.countAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Request() req: any) {
    // admin
    const user = req.user;
    if (user.role != Role.ADMIN) {
      throw new UnauthorizedException();
    }

    return this.userService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Request() req: any, @Param('id') id: string) {
    // admin
    const user = req.user;
    if (user.role != Role.ADMIN) {
      throw new UnauthorizedException();
    }
    return this.userService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('student-courses/:id')
  getStudentCourses(@Param('id') id: string) {
    // all user
    return this.userService.getStudentCourses(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('instructor-courses/:id')
  getInstructorCourses(@Request() req: any, @Param('id') id: string) {
    // teacher & admin
    const user = req.user;
    if (user.role == Role.STUDENT) {
      throw new UnauthorizedException();
    }

    return this.userService.getInstructorCourses(+id);
  }

  @Patch(':id')
  update(
    @Request() req: any,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    // admin
    const user = req.user;
    if (user && user.id && user.id != id) {
      throw new UnauthorizedException();
    }
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    // admin
    const user = req.user;
    if (user.role != Role.ADMIN) {
      throw new UnauthorizedException();
    }

    return this.userService.remove(+id);
  }
}
