import { InputType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateIndicatorBySchoolInput {
  @IsNumber()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  average: number;

  @IsArray()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  distribuation: number[];

  @IsArray()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  brands: string[];

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  censusId: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  schoolId: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  indicatorId: string;
}
