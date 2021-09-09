import { InputType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class FilterIndicatorBySchool {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  censusId: string;

  @IsArray()
  @IsOptional()
  schoolIds: string[];

  @IsArray()
  @IsOptional()
  indicatorIds: string[];
}
