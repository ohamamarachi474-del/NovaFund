import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from './email.service';

import { PrismaService } from '../../prisma.service';

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(async () => {
    process.env.SENDGRID_API_KEY = 'SG.test';
    const mockPrismaService = {};
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
