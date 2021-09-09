import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateCensusInput } from './dto/create-census.input';
import { Census } from './census.entity';
import { CensusService } from './census.service';

@Resolver('Census')
export class CensusResolver {
  constructor(private censusService: CensusService) {}

  @Query(() => [Census])
  async censuss(): Promise<Census[]> {
    const censuss = await this.censusService.findAllCensuss();
    return censuss;
  }

  @Query(() => Census)
  async census(@Args('id') id: string): Promise<Census> {
    const census = await this.censusService.findCensusById(id);
    return census;
  }

  @Mutation(() => Census)
  async createCensus(@Args('data') data: CreateCensusInput): Promise<Census> {
    const census = await this.censusService.createCensus(data);
    return census;
  }
}
