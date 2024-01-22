import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { MongoRepository, Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { UpdateUserDto } from './dto/update-user-dto';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: MongoRepository<User>,
    ){}

    async create(createUserDto: CreateUserDto) {
        return await this.userRepository.save(createUserDto);
    }

    async findOne(id: string) {
        return await this.userRepository.findOne({where: {_id: new ObjectId(id)}});
    }

    async findOneByMail(email: string) {
        console.log(email);
        return await this.userRepository.findOne({where: {email}});
    }

    findAll() {
        return this.userRepository.find();
    }

    update(id: ObjectId, updateUserDto: UpdateUserDto) {
        return this.userRepository.update(id, updateUserDto);
    }
    
    remove(id: ObjectId) {
        return this.userRepository.delete(id);
    }

      
}
