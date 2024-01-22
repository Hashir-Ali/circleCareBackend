import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AnswersCheckboxesService } from './answers-checkboxes.service';
import { CreateAnswersCheckboxDto } from './dto/create-answers-checkbox.dto';
import { UpdateAnswersCheckboxDto } from './dto/update-answers-checkbox.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('answers-checkbox')
@Controller('answers-checkboxes')
export class AnswersCheckboxesController {
  constructor(private readonly answersCheckboxesService: AnswersCheckboxesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createAnswersCheckboxDto: CreateAnswersCheckboxDto) {
    return this.answersCheckboxesService.create(createAnswersCheckboxDto);
  }

  @Get('/question/:quest_id')
  @UseGuards(JwtAuthGuard)
  findAll(@Param('quest_id') quest_id: string) {
    return this.answersCheckboxesService.findAll(quest_id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.answersCheckboxesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateAnswersCheckboxDto: UpdateAnswersCheckboxDto) {
    return this.answersCheckboxesService.update(id, updateAnswersCheckboxDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.answersCheckboxesService.remove(id);
  }
}
