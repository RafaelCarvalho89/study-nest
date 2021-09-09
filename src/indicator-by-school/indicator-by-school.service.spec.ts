import { Test, TestingModule } from '@nestjs/testing';
import { IndicatorBySchoolService } from './indicator-by-school.service';

describe('IndicatorBySchoolService', () => {
  let service: IndicatorBySchoolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndicatorBySchoolService],
    }).compile();

    service = module.get<IndicatorBySchoolService>(IndicatorBySchoolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
