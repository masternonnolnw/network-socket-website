import { IsNumber, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  roomId: string;

  @IsNumber()
  authorId: number;

  @IsString()
  content: string;
}
