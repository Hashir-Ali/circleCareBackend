import { Injectable } from '@nestjs/common';
import { CreateUserQuestionnaireDto } from './dto/create-user-questionnaire.dto';
import { UpdateUserQuestionnaireDto } from './dto/update-user-questionnaire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserQuestionnaire } from './entities/user-questionnaire.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UserQuestionnaireService {
  constructor(
    @InjectRepository(UserQuestionnaire)
    private userQuestionnaireRepository: MongoRepository<UserQuestionnaire>
  ){}

  async create(createUserQuestionnaireDto: CreateUserQuestionnaireDto) {
    return await this.userQuestionnaireRepository.save(createUserQuestionnaireDto);
  }

  async findAll(questionnaire_id: string, user_id: string) {
    return await this.userQuestionnaireRepository.find({where: {questionnaire_id: questionnaire_id, user_id: user_id}});
  }

  async findOne(id: number) {
    return await this.userQuestionnaireRepository.findOne({where: {_id: id}});
  }

  async update(id: number, updateUserQuestionnaireDto: UpdateUserQuestionnaireDto) {
    return await this.userQuestionnaireRepository.update(id, updateUserQuestionnaireDto);
  }

  async remove(id: number) {
    return await this.userQuestionnaireRepository.delete(id);
  }
}
