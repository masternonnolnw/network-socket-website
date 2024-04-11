import { MappedType, PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  data: MappedType<Partial<CreateCourseDto>>;
  userIdsToAdd?: number[];
}
