// export type IndicatorCategoryName = 'ALUNOS' | 'PAIS' | 'PROFESSORES' | 'GESTORES';

export interface IndicatorInterface {
  id: string;
  name: string;
  description: string;
  slug: string;
  category: string;
}
