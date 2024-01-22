import { Injectable } from '@nestjs/common';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { Questionnaire } from './entities/questionnaire.entity';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuestionnaireService {
  constructor(
    @InjectRepository(Questionnaire)
    private questionnaireRepository: MongoRepository<Questionnaire>
  ){}
  
  async create(createQuestionnaireDto: CreateQuestionnaireDto) {
    return await this.questionnaireRepository.save(createQuestionnaireDto);
  }

  async findAll() {
    return await this.questionnaireRepository.find();
  }

  async findOne(id: string) {
    return await this.questionnaireRepository.findOne({where: {_id: id}});
  }

  async update(id: string, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    return await this.questionnaireRepository.update(id, updateQuestionnaireDto);
  }

  remove(id: string) {
    return this.questionnaireRepository.delete(id);
  }
}
