import { Injectable } from '@nestjs/common';
import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTask } from './entities/user-task.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UserTasksService {

  constructor(
    @InjectRepository(UserTask)
    private userTaskRepository: MongoRepository<UserTask>
  ){}

  async create(createUserTaskDto: CreateUserTaskDto) {
    return await this.userTaskRepository.save(createUserTaskDto);
  }

  findAll() {
    return this.userTaskRepository.find();
  }

  async findOne(id: string) {
    return await this.userTaskRepository.findOne({where: {_id: id}});
  }

  update(id: string, updateUserTaskDto: UpdateUserTaskDto) {
    return this.userTaskRepository.update(id, updateUserTaskDto);
  }

  // remove(id: number) {
  //   return ;
  // }
}
