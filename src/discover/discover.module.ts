import { Module } from '@nestjs/common';
import { DiscoverService } from './discover.service';
import { DiscoverController } from './discover.controller';
import { Discover } from './entities/discover.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Discover])],
  controllers: [DiscoverController],
  providers: [DiscoverService]
})
export class DiscoverModule {}
