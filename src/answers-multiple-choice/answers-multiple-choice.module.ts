import { Module } from '@nestjs/common';
import { AnswersMultipleChoiceService } from './answers-multiple-choice.service';
import { AnswersMultipleChoiceController } from './answers-multiple-choice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswersMultipleChoice } from './entities/answers-multiple-choice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnswersMultipleChoice])],
  controllers: [AnswersMultipleChoiceController],
  providers: [AnswersMultipleChoiceService]
})
export class AnswersMultipleChoiceModule {}
