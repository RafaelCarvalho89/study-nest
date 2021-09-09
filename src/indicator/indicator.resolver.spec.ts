import { Test, TestingModule } from '@nestjs/testing';
import { IndicatorResolver } from './indicator.resolver';

describe('IndicatorResolver', () => {
  let resolver: IndicatorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndicatorResolver],
    }).compile();

    resolver = module.get<IndicatorResolver>(IndicatorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
