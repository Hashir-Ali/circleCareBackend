import { Module } from '@nestjs/common';
import { AnswersCheckboxesService } from './answers-checkboxes.service';
import { AnswersCheckboxesController } from './answers-checkboxes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswersCheckbox } from './entities/answers-checkbox.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnswersCheckbox])],
  controllers: [AnswersCheckboxesController],
  providers: [AnswersCheckboxesService]
})
export class AnswersCheckboxesModule {}
