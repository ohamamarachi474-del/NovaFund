import { Test, TestingModule } from '@nestjs/testing';
import { NotificationService } from './notification.service';

import { PrismaService } from '../../prisma.service';
import { ConfigService } from '@nestjs/config';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(async () => {
    const mockPrismaService = {};
    const mockConfigService = { get: jest.fn() };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
