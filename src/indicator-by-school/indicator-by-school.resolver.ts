import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateIndicatorBySchoolInput } from './dto/create-indicator-by-school.input';
import { IndicatorBySchool } from './indicator-by-school.entity';
import { IndicatorBySchoolService } from './indicator-by-school.service';
import { FilterIndicatorBySchool } from './dto/filter-indicator-by-school.input';

@Resolver('IndicatorBySchool')
export class IndicatorBySchoolResolver {
  constructor(private indicatorBySchoolService: IndicatorBySchoolService) {}

  @Query(() => [IndicatorBySchool])
  async indicatorsBySchool(): Promise<IndicatorBySchool[]> {
    const indicatorsBySchool = await this.indicatorBySchoolService.findAllIndicatorBySchools();
    console.log('indicatorsBySchool', indicatorsBySchool);
    return indicatorsBySchool;
  }

  @Query(() => IndicatorBySchool)
  async indicatorBySchool(@Args('id') id: string): Promise<IndicatorBySchool> {
    const indicatorsBySchool = await this.indicatorBySchoolService.findIndicatorBySchoolById(
      id,
    );
    return indicatorsBySchool;
  }

  @Query(() => [IndicatorBySchool])
  async indicatorBySchoolWithFilter(
    @Args('filters') filters: FilterIndicatorBySchool,
  ): Promise<IndicatorBySchool[]> {
    const indicatorsBySchool = await this.indicatorBySchoolService.filterIndicatorBySchool(
      filters,
    );
    return indicatorsBySchool;
  }

  @Mutation(() => IndicatorBySchool)
  async createIndicatorBySchool(
    @Args('data') data: CreateIndicatorBySchoolInput,
  ): Promise<IndicatorBySchool> {
    const indicatorsBySchool = await this.indicatorBySchoolService.createIndicatorBySchool(
      data,
    );
    return indicatorsBySchool;
  }
}
