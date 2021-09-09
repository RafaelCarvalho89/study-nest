import { Test, TestingModule } from '@nestjs/testing';
import { IndicatorBySchoolResolver } from './indicator-by-school.resolver';

describe('IndicatorBySchoolResolver', () => {
  let resolver: IndicatorBySchoolResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndicatorBySchoolResolver],
    }).compile();

    resolver = module.get<IndicatorBySchoolResolver>(IndicatorBySchoolResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
