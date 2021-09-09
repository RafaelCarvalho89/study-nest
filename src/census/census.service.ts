import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCensusInput } from './dto/create-census.input';
import { Census } from './census.entity';

@Injectable()
export class CensusService {
  constructor(
    @InjectRepository(Census)
    private censusRepository: Repository<Census>,
  ) {}

  async findAllCensuss(): Promise<Census[]> {
    const censuss = await this.censusRepository.find();
    return censuss;
  }

  async findCensusById(id: string): Promise<Census> {
    const census = await this.censusRepository.findOne(id);
    if (!census) {
      throw new NotFoundException('Indicador não encontrado');
    }
    return census;
  }

  async createCensus(data: CreateCensusInput): Promise<Census> {
    const census = this.censusRepository.create(data);
    const censusSaved = await this.censusRepository.save(census);
    if (!censusSaved) {
      throw new InternalServerErrorException('Problema para criar indicador.');
    }
    return censusSaved;
  }
}
