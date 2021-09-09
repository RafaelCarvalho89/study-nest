type IndicatorCategory = 'ALUNOS' | 'PAIS' | 'PROFESSORES' | 'GESTORES';
type SegmentName =
  | 'ENSINO_MEDIO'
  | 'ENSINO_FUNDAMENTAL_II'
  | 'ENSINO_FUNDAMENTAL_I';

interface Indicator {
  id: string;
  name: string;
  description: string;
  slug: string;
  category: IndicatorCategory;
}

interface Segment {
  id: string;
  name: SegmentName;
  indicators: Indicator[];
}

interface School {
  id: string;
  externalId: string;
  name: string;
  brands: string[];
  indicators: Indicator[];
  segments: Segment[];
}

export interface CensusInterface {
  id: string;
  name: string;
  description: string;
  schoolsTotal: string;
  participantsTotal: string;
  schools?: School[];
}
