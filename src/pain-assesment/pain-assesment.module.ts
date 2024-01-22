import { Module } from '@nestjs/common';
import { PainAssesmentService } from './pain-assesment.service';
import { PainAssesmentController } from './pain-assesment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PainAssesment } from './entities/pain-assesment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PainAssesment])],
  controllers: [PainAssesmentController],
  providers: [PainAssesmentService]
})
export class PainAssesmentModule {}
