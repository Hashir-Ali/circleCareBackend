import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Record } from './entities/record.entity';
import { And, Equal, LessThan, LessThanOrEqual, MongoRepository, MoreThanOrEqual } from 'typeorm';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private recordRepository: MongoRepository<Record>
  ){}

  async create(createRecordDto: CreateRecordDto) {
    return await this.recordRepository.save(createRecordDto);
  }

  async findAll() {
    return await this.recordRepository.find();
  }

  async findOne(id: number) {
    return await this.recordRepository.findOne({where: {_id: id}});
  }

  async findByDates(startDate: Date, endDate: Date){
    // return await this.recordRepository.findOne({where: {
    //   record_date: MoreThanOrEqual(startDate), 
    // }})

    const query = this.recordRepository.createQueryBuilder('record');

    const result = await query
      .where('record.record_date BETWEEN :startDate AND :endDate', {
        startDate,
        endDate,
      })
      .getMany();

    return result;

  }


  // update(id: number, updateRecordDto: UpdateRecordDto) {
  //   return `This action updates a #${id} record`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} record`;
  // }
}
