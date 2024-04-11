import { MappedType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  data: MappedType<Partial<CreateUserDto>>;
  courseIdsToOwn?: number[];
  courseIdsToEnroll?: number[];
}
