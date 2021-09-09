import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Census } from './census.entity';
import { CensusResolver } from './census.resolver';
import { CensusService } from './census.service';

@Module({
  imports: [TypeOrmModule.forFeature([Census])],
  providers: [CensusResolver, CensusService],
  exports: [CensusService],
})
export class CensusModule {}
