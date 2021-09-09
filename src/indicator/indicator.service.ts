import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIndicatorInput } from './dto/create-indicator.input';
import { Indicator } from './indicator.entity';

@Injectable()
export class IndicatorService {
  constructor(
    @InjectRepository(Indicator)
    private indicatorRepository: Repository<Indicator>,
  ) {}

  async findAllIndicators(): Promise<Indicator[]> {
    const indicators = await this.indicatorRepository.find();
    return indicators;
  }

  async findIndicatorById(id: string): Promise<Indicator> {
    const indicator = await this.indicatorRepository.findOne(id);
    if (!indicator) {
      throw new NotFoundException('Indicador não encontrado');
    }
    return indicator;
  }

  async createIndicator(data: CreateIndicatorInput): Promise<Indicator> {
    const indicator = this.indicatorRepository.create(data);
    const indicatorSaved = await this.indicatorRepository.save(indicator);
    if (!indicatorSaved) {
      throw new InternalServerErrorException('Problema para criar indicador.');
    }
    return indicatorSaved;
  }

  async deleteIndicator(id: string): Promise<boolean> {
    const indicator = await this.findIndicatorById(id);
    const deleted = await this.indicatorRepository.delete(indicator);
    return deleted ? true : false;
  }
}
