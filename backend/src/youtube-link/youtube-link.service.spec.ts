import { Test, TestingModule } from '@nestjs/testing';
import { YoutubeLinkService } from './youtube-link.service';

describe('YoutubeLinkService', () => {
  let service: YoutubeLinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YoutubeLinkService],
    }).compile();

    service = module.get<YoutubeLinkService>(YoutubeLinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
