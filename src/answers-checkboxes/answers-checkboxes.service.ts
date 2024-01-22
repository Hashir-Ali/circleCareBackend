import { Injectable } from '@nestjs/common';
import { CreateAnswersCheckboxDto } from './dto/create-answers-checkbox.dto';
import { UpdateAnswersCheckboxDto } from './dto/update-answers-checkbox.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswersCheckbox } from './entities/answers-checkbox.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class AnswersCheckboxesService {
  constructor(
    @InjectRepository(AnswersCheckbox)
    private checkboxAnswersRepository: MongoRepository<AnswersCheckbox>
  ){}

  async create(createAnswersCheckboxDto: CreateAnswersCheckboxDto) {
    return await this.checkboxAnswersRepository.save(createAnswersCheckboxDto);
  }

  async findAll(quest_id: string) {
    return await this.checkboxAnswersRepository.find({where: {question_id: quest_id}});
  }

  async findOne(id: string) {
    return await this.checkboxAnswersRepository.findOne({where: {_id: id}});
  }

  async update(id: string, updateAnswersCheckboxDto: UpdateAnswersCheckboxDto) {
    return await this.checkboxAnswersRepository.update(id, updateAnswersCheckboxDto);
  }

  async remove(id: string) {
    return await this.checkboxAnswersRepository.delete(id);
  }
}
