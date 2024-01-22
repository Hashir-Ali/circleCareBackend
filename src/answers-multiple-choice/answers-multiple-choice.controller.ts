import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnswersMultipleChoiceService } from './answers-multiple-choice.service';
import { CreateAnswersMultipleChoiceDto } from './dto/create-answers-multiple-choice.dto';
import { UpdateAnswersMultipleChoiceDto } from './dto/update-answers-multiple-choice.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('answers-multiple-choice')
@Controller('answers-multiple-choice')
export class AnswersMultipleChoiceController {
  constructor(private readonly answersMultipleChoiceService: AnswersMultipleChoiceService) {}

  @Post()
  create(@Body() createAnswersMultipleChoiceDto: CreateAnswersMultipleChoiceDto) {
    return this.answersMultipleChoiceService.create(createAnswersMultipleChoiceDto);
  }

  @Get('/questions/:quest_id')
  findAll(@Param('quest_id') quest_id: string) {
    return this.answersMultipleChoiceService.findAll(quest_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.answersMultipleChoiceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnswersMultipleChoiceDto: UpdateAnswersMultipleChoiceDto) {
    return this.answersMultipleChoiceService.update(id, updateAnswersMultipleChoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.answersMultipleChoiceService.remove(id);
  }
}
