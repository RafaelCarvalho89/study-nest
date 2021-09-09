import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Census } from 'src/census/census.entity';
import { CensusResolver } from 'src/census/census.resolver';
import { CensusService } from 'src/census/census.service';
import { Indicator } from 'src/indicator/indicator.entity';
import { IndicatorResolver } from 'src/indicator/indicator.resolver';
import { IndicatorService } from 'src/indicator/indicator.service';
import { School } from 'src/school/school.entity';
import { SchoolResolver } from 'src/school/school.resolver';
import { SchoolService } from 'src/school/school.service';
import { IndicatorBySchool } from './indicator-by-school.entity';
import { IndicatorBySchoolResolver } from './indicator-by-school.resolver';
import { IndicatorBySchoolService } from './indicator-by-school.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([IndicatorBySchool, Census, School, Indicator]),
  ],
  providers: [
    IndicatorBySchoolResolver,
    IndicatorBySchoolService,
    CensusResolver,
    CensusService,
    SchoolResolver,
    SchoolService,
    IndicatorResolver,
    IndicatorService,
  ],
})
export class IndicatorBySchoolModule {}
