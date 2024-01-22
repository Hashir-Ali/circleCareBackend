import { Injectable } from '@nestjs/common';
import { CreateDiscoverDto } from './dto/create-discover.dto';
import { UpdateDiscoverDto } from './dto/update-discover.dto';
import { Discover } from './entities/discover.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class DiscoverService {
  constructor(
    @InjectRepository(Discover)
    private discoverRepository: MongoRepository<Discover>
  ){}
  
  async create(createDiscoverDto: CreateDiscoverDto) {
    return await this.discoverRepository.save(createDiscoverDto);
  }

  findAll() {
    // return `This action returns all discover`;
    return this.discoverRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} discover`;
  }

  update(id: number, updateDiscoverDto: UpdateDiscoverDto) {
    return `This action updates a #${id} discover`;
  }

  remove(id: number) {
    return `This action removes a #${id} discover`;
  }
}
