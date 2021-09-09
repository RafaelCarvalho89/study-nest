import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateIndicatorInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  description: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  slug: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  category: string;
}
