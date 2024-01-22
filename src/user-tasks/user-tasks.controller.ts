import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserTasksService } from './user-tasks.service';
import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('user-tasks')
@Controller('user-tasks')
export class UserTasksController {
  constructor(private readonly userTasksService: UserTasksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createUserTaskDto: CreateUserTaskDto) {
    return this.userTasksService.create(createUserTaskDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.userTasksService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.userTasksService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateUserTaskDto: UpdateUserTaskDto) {
    return this.userTasksService.update(id, updateUserTaskDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {ydff 
  
  //   return this.userTasksService.remove(+id);
  // }
}
