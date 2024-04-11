import { PartialType } from '@nestjs/mapped-types';
import { CreateYoutubeLinkDto } from './create-youtube-link.dto';

export class UpdateYoutubeLinkDto extends PartialType(CreateYoutubeLinkDto) {}
