import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSchoolInput } from './dto/create-school.input';
import { School } from './school.entity';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private schoolRepository: Repository<School>,
  ) {}

  async findAllSchools(): Promise<School[]> {
    const schools = await this.schoolRepository.find();
    return schools;
  }

  async findSchoolById(id: string): Promise<School> {
    const school = await this.schoolRepository.findOne(id);
    if (!school) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return school;
  }

  async createSchool(data: CreateSchoolInput): Promise<School> {
    const school = this.schoolRepository.create(data);
    const schoolSaved = await this.schoolRepository.save(school);
    if (!schoolSaved) {
      throw new InternalServerErrorException('Problema para criar usuário.');
    }
    return schoolSaved;
  }
}
