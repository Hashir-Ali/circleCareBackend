import { Module } from '@nestjs/common';
import { UserQuestionnaireService } from './user-questionnaire.service';
import { UserQuestionnaireController } from './user-questionnaire.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserQuestionnaire } from './entities/user-questionnaire.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserQuestionnaire])],
  controllers: [UserQuestionnaireController],
  providers: [UserQuestionnaireService]
})
export class UserQuestionnaireModule {}
