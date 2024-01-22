import { Injectable } from '@nestjs/common';
import { CreateAnswersMultipleChoiceDto } from './dto/create-answers-multiple-choice.dto';
import { UpdateAnswersMultipleChoiceDto } from './dto/update-answers-multiple-choice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswersMultipleChoice } from './entities/answers-multiple-choice.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class AnswersMultipleChoiceService {
  constructor(
    @InjectRepository(AnswersMultipleChoice)
    private multipleChoiceRepository: MongoRepository<AnswersMultipleChoice>
  ){}

  async create(createAnswersMultipleChoiceDto: CreateAnswersMultipleChoiceDto) {
    return await this.multipleChoiceRepository.save(createAnswersMultipleChoiceDto);
  }

  async findAll(quest_id: string) {
    return await this.multipleChoiceRepository.find({where: {question_id: quest_id}});
  }

  async findOne(id: string) {
    return await this.multipleChoiceRepository.findOne({where: {_id: id}});
  }

  async update(id: string, updateAnswersMultipleChoiceDto: UpdateAnswersMultipleChoiceDto) {
    return await this.multipleChoiceRepository.update(id, updateAnswersMultipleChoiceDto);
  }

  async remove(id: string) {
    return await this.multipleChoiceRepository.delete(id);
  }
}
