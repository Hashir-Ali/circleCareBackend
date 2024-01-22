import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { ReflectionService } from './reflection.service';
import { CreateReflectionDto } from './dto/create-reflection.dto';
import { UpdateReflectionDto } from './dto/update-reflection.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('reflection')
@Controller('reflection')
export class ReflectionController {
  constructor(private readonly reflectionService: ReflectionService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createReflectionDto: CreateReflectionDto) {
    return await this.reflectionService.create(createReflectionDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.reflectionService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.reflectionService.findOne(id);
  }

  @Get('users/:userId')
  @UseGuards(JwtAuthGuard)
  findByUser(@Param('userId') userId: string) {
    return this.reflectionService.findByUser(userId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateReflectionDto: UpdateReflectionDto) {
    return this.reflectionService.update(+id, updateReflectionDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   // return this.reflectionService.remove(+id);
  // }
}
