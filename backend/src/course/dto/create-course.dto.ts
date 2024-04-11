import { IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  title: string;
  @IsString()
  description: string;

  @IsNumber()
  instructorId: number;
}
