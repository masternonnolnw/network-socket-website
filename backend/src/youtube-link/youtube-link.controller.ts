import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { YoutubeLinkService } from './youtube-link.service';
import { CreateYoutubeLinkDto } from './dto/create-youtube-link.dto';
import { UpdateYoutubeLinkDto } from './dto/update-youtube-link.dto';

@Controller('youtube-link')
export class YoutubeLinkController {
  constructor(private readonly youtubeLinkService: YoutubeLinkService) {}

  @Post()
  create(@Body() createYoutubeLinkDto: CreateYoutubeLinkDto) {
    return this.youtubeLinkService.create(null, createYoutubeLinkDto);
  }

  @Post('course/:id')
  createForCourse(
    @Param('id') id: string,
    @Body() createYoutubeLinkDto: CreateYoutubeLinkDto,
  ) {
    return this.youtubeLinkService.create(+id, createYoutubeLinkDto);
  }

  @Get()
  findAll() {
    return this.youtubeLinkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.youtubeLinkService.findOne(+id);
  }

  @Get('course/:id')
  findInCourse(@Param('id') id: string) {
    return this.youtubeLinkService.findInCourse(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateYoutubeLinkDto: UpdateYoutubeLinkDto,
  ) {
    return this.youtubeLinkService.update(+id, updateYoutubeLinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.youtubeLinkService.remove(+id);
  }
}
