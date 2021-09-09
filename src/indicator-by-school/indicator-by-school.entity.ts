import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Census } from 'src/census/census.entity';
import { Indicator } from 'src/indicator/indicator.entity';
import { School } from 'src/school/school.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class IndicatorBySchool {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  average: number;

  @Column({ type: 'jsonb' })
  distribuation: number[];

  @Column({ type: 'jsonb' })
  brands: string[];

  @ManyToOne(() => Census)
  @JoinColumn()
  census: Census;

  @Column()
  censusId: string;

  @ManyToOne(() => School)
  @JoinColumn()
  school: School;

  @Column()
  schoolId: string;

  @ManyToMany(() => School)
  @JoinColumn()
  indicator: Indicator;

  @Column()
  indicatorId: string;
}
