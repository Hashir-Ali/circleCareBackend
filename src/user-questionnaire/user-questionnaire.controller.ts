import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserQuestionnaireService } from './user-questionnaire.service';
import { CreateUserQuestionnaireDto } from './dto/create-user-questionnaire.dto';
import { UpdateUserQuestionnaireDto } from './dto/update-user-questionnaire.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('user-questionnaire')
@Controller('user-questionnaire')
export class UserQuestionnaireController {
  constructor(private readonly userQuestionnaireService: UserQuestionnaireService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createUserQuestionnaireDto: CreateUserQuestionnaireDto) {
    return this.userQuestionnaireService.create(createUserQuestionnaireDto);
  }

  @Get('/survey/:questionnaire_id/user/:user_id')
  @UseGuards(JwtAuthGuard)
  async findAll(@Param('questionnaire_id') questionnaire_id: string, @Param('user_id') user_id: string) {
    return await this.userQuestionnaireService.findAll(questionnaire_id, user_id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    return await this.userQuestionnaireService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateUserQuestionnaireDto: UpdateUserQuestionnaireDto) {
    return await this.userQuestionnaireService.update(+id, updateUserQuestionnaireDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return await this.userQuestionnaireService.remove(+id);
  }
}
