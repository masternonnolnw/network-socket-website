import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateYoutubeLinkDto {
  @IsNumber()
  courseId: number;

  @IsString()
  youtubeId: string;

  @IsString()
  clipTitle: string;
}
