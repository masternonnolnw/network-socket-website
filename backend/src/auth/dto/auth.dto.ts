import { Role } from '@prisma/client';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  name: string;
  role: Role;
}
