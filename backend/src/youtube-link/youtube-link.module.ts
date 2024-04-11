import { Module } from '@nestjs/common';
import { YoutubeLinkService } from './youtube-link.service';
import { YoutubeLinkController } from './youtube-link.controller';

@Module({
  controllers: [YoutubeLinkController],
  providers: [YoutubeLinkService]
})
export class YoutubeLinkModule {}
