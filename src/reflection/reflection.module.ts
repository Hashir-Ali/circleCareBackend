import { Module } from '@nestjs/common';
import { ReflectionService } from './reflection.service';
import { ReflectionController } from './reflection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reflection } from './entities/reflection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reflection])],
  controllers: [ReflectionController],
  providers: [ReflectionService]
})
export class ReflectionModule {}
