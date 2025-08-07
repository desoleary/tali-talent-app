import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';

const repoMock = {
  create: vi.fn(),
  save: vi.fn(),
  find: vi.fn(),
  findOne: vi.fn(),
  update: vi.fn(),
  delete: vi.fn(),
};

describe('CompaniesController', () => {
  let controller: CompaniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompaniesController],
      providers: [
        CompaniesService,
        { provide: getRepositoryToken(Company), useValue: repoMock },
      ],
    }).compile();

    controller = module.get<CompaniesController>(CompaniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});