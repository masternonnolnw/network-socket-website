import { Test, TestingModule } from '@nestjs/testing';
import { YoutubeLinkController } from './youtube-link.controller';
import { YoutubeLinkService } from './youtube-link.service';

describe('YoutubeLinkController', () => {
  let controller: YoutubeLinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YoutubeLinkController],
      providers: [YoutubeLinkService],
    }).compile();

    controller = module.get<YoutubeLinkController>(YoutubeLinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
