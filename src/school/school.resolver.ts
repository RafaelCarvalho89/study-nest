import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateSchoolInput } from './dto/create-school.input';
import { School } from './school.entity';
import { SchoolService } from './school.service';

@Resolver('School')
export class SchoolResolver {
  constructor(private schoolService: SchoolService) {}

  @Query(() => [School])
  async schools(): Promise<School[]> {
    const schools = await this.schoolService.findAllSchools();
    return schools;
  }

  @Query(() => School)
  async school(@Args('id') id: string): Promise<School> {
    const school = await this.schoolService.findSchoolById(id);
    return school;
  }

  @Mutation(() => School)
  async createSchool(@Args('data') data: CreateSchoolInput): Promise<School> {
    const school = await this.schoolService.createSchool(data);
    return school;
  }
}
