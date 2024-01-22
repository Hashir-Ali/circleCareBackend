import { Injectable } from '@nestjs/common';
import { CreatePainAssesmentDto } from './dto/create-pain-assesment.dto';
import { UpdatePainAssesmentDto } from './dto/update-pain-assesment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PainAssesment } from './entities/pain-assesment.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class PainAssesmentService {
  constructor(
    @InjectRepository(PainAssesment)
    private painRepository: MongoRepository<PainAssesment>
  ){}
  
  async create(createPainAssesmentDto: CreatePainAssesmentDto) {
    return await this.painRepository.save(createPainAssesmentDto);
  }

  async findAll() {
    return await this.painRepository.find();
  }

  async findOne(id: number) {
    return await this.painRepository.findOne({where: {_id: id}});
  }
}
