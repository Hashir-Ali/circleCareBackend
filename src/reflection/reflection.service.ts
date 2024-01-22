import { Injectable } from '@nestjs/common';
import { CreateReflectionDto } from './dto/create-reflection.dto';
import { UpdateReflectionDto } from './dto/update-reflection.dto';
import { Reflection } from './entities/reflection.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class ReflectionService {
  constructor(
    @InjectRepository(Reflection)
    private reflectionRepository: MongoRepository<Reflection>
  ){}
  async create(createReflectionDto: CreateReflectionDto) {
    return await this.reflectionRepository.save(createReflectionDto);
  }

  findAll() {
    return this.reflectionRepository.find();
  }

  findOne(id: string) {
    return this.reflectionRepository.findOne({where: {_id: new ObjectId(id)}});
  }

  findByUser(user_id: string) {
    return this.reflectionRepository.findOne({where: {user_id: new ObjectId(user_id)}});
  }

  update(id: number, updateReflectionDto: UpdateReflectionDto) {
    return this.reflectionRepository.update(id, updateReflectionDto);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} reflection`;
  // }
}
