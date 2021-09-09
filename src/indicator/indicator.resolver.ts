import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateIndicatorInput } from './dto/create-indicator.input';
import { Indicator } from './indicator.entity';
import { IndicatorService } from './indicator.service';

@Resolver('Indicator')
export class IndicatorResolver {
  constructor(private indicatorService: IndicatorService) {}

  @Query(() => [Indicator])
  async indicators(): Promise<Indicator[]> {
    const indicators = await this.indicatorService.findAllIndicators();
    return indicators;
  }

  @Query(() => Indicator)
  async indicator(@Args('id') id: string): Promise<Indicator> {
    const indicator = await this.indicatorService.findIndicatorById(id);
    return indicator;
  }

  @Mutation(() => Indicator)
  async createIndicator(
    @Args('data') data: CreateIndicatorInput,
  ): Promise<Indicator> {
    const indicator = await this.indicatorService.createIndicator(data);
    return indicator;
  }

  @Mutation(() => Boolean)
  async deleteIndicator(@Args('id') id: string): Promise<boolean> {
    const isDeleted = await this.indicatorService.deleteIndicator(id);
    return isDeleted;
  }
}
