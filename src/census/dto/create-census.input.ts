import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCensusInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  description: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  schoolsTotal: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  participantsTotal: string;
}
