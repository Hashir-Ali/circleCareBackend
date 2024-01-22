import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PainAssesmentService } from './pain-assesment.service';
import { CreatePainAssesmentDto } from './dto/create-pain-assesment.dto';
import { UpdatePainAssesmentDto } from './dto/update-pain-assesment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('pain-assesment')
@Controller('pain-assesment')
export class PainAssesmentController {
  constructor(private readonly painAssesmentService: PainAssesmentService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createPainAssesmentDto: CreatePainAssesmentDto) {
    return this.painAssesmentService.create(createPainAssesmentDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.painAssesmentService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.painAssesmentService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePainAssesmentDto: UpdatePainAssesmentDto) {
  //   return this.painAssesmentService.update(+id, updatePainAssesmentDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.painAssesmentService.remove(+id);
  // }
}
