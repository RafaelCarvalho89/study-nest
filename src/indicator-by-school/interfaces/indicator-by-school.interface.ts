import { CensusInterface } from 'src/census/interfaces/census.interface';
import { IndicatorInterface } from 'src/indicator/interfaces/indicator.interface';
import { SchoolInterface } from 'src/school/interfaces/school.interface';

export interface IndicatorBySchoolInterface {
  id: string;
  average: number;
  distribuation: number[];
  brands: string[];
  census: CensusInterface;
  school: SchoolInterface;
  indicator: IndicatorInterface;
}
