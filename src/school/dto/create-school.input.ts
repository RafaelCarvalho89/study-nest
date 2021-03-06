import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateSchoolInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  externalId: string;
}
