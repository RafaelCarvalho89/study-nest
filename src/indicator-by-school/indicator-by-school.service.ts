import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CensusService } from 'src/census/census.service';
import { CensusInterface } from 'src/census/interfaces/census.interface';
import { IndicatorService } from 'src/indicator/indicator.service';
import { IndicatorInterface } from 'src/indicator/interfaces/indicator.interface';
import { SchoolInterface } from 'src/school/interfaces/school.interface';
import { SchoolService } from 'src/school/school.service';
import { getManager, Repository } from 'typeorm';
import { CreateIndicatorBySchoolInput } from './dto/create-indicator-by-school.input';
import { IndicatorBySchool } from './indicator-by-school.entity';
import { FilterIndicatorBySchool } from './dto/filter-indicator-by-school.input';
import { IndicatorBySchoolInterface } from './interfaces/indicator-by-school.interface';
import { indicatorsBySchoolWithFiltersQuery } from './queries/indicators-by-school-with-filters.query';

@Injectable()
export class IndicatorBySchoolService {
  constructor(
    @InjectRepository(IndicatorBySchool)
    private indicatorBySchoolRepository: Repository<IndicatorBySchool>,
    private censusService: CensusService,
    private schoolService: SchoolService,
    private indicatorService: IndicatorService,
  ) {}

  private entityManager = getManager();

  private async makeIndicatorBySchool(
    createIndicatorBySchoolInput: CreateIndicatorBySchoolInput,
  ): Promise<IndicatorBySchoolInterface> {
    const { censusId, schoolId, indicatorId } = createIndicatorBySchoolInput;
    const census: CensusInterface = await this.censusService.findCensusById(
      censusId,
    );

    const school: SchoolInterface = await this.schoolService.findSchoolById(
      schoolId,
    );

    const indicator: IndicatorInterface = await this.indicatorService.findIndicatorById(
      indicatorId,
    );

    if (!census)
      throw new NotFoundException(`Census with id ${censusId} not found`);

    if (!school)
      throw new NotFoundException(`School with id ${schoolId} not found`);

    if (!indicator)
      throw new NotFoundException(`Indicator with id ${indicatorId} not found`);

    const createdIndicatorBySchool: IndicatorBySchoolInterface = this.indicatorBySchoolRepository.create(
      createIndicatorBySchoolInput,
    );
    createdIndicatorBySchool.census = census;
    createdIndicatorBySchool.school = school;
    createdIndicatorBySchool.indicator = indicator;
    return createdIndicatorBySchool;
  }

  async findAllIndicatorBySchools(): Promise<IndicatorBySchool[]> {
    const indicatorBySchools = await this.indicatorBySchoolRepository.find();
    console.log('indicatorBySchools', indicatorBySchools);
    return indicatorBySchools;
  }

  async findIndicatorBySchoolById(id: string): Promise<IndicatorBySchool> {
    const indicatorBySchool = await this.indicatorBySchoolRepository.findOne(
      id,
    );
    if (!indicatorBySchool) {
      throw new NotFoundException('Indicador não encontrado');
    }
    return indicatorBySchool;
  }

  async filterIndicatorBySchool(
    filters: FilterIndicatorBySchool,
  ): Promise<IndicatorBySchool[]> {
    const { censusId, schoolIds, indicatorIds } = filters;
    const indicatorBySchool = await this.entityManager.query(
      indicatorsBySchoolWithFiltersQuery,
      [censusId, schoolIds, indicatorIds],
    );

    console.log('indicatorBySchool', indicatorBySchool);

    if (!indicatorBySchool) {
      throw new NotFoundException('Indicador não encontrado');
    }
    return indicatorBySchool;
  }

  async createIndicatorBySchool(
    data: CreateIndicatorBySchoolInput,
  ): Promise<IndicatorBySchool> {
    const newIndicatorBySchool = await this.makeIndicatorBySchool(data);
    const indicatorBySchoolSaved = await this.indicatorBySchoolRepository.save(
      newIndicatorBySchool,
    );
    if (!indicatorBySchoolSaved)
      throw new InternalServerErrorException('Problema para criar indicador.');

    return indicatorBySchoolSaved;
  }

  async deleteIndicatorBySchool(id: string): Promise<boolean> {
    const indicatorBySchool = await this.findIndicatorBySchoolById(id);
    const deleted = await this.indicatorBySchoolRepository.delete(
      indicatorBySchool,
    );
    return deleted ? true : false;
  }
}
