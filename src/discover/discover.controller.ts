import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DiscoverService } from './discover.service';
import { CreateDiscoverDto } from './dto/create-discover.dto';
import { UpdateDiscoverDto } from './dto/update-discover.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('discover')
@Controller('discover')
export class DiscoverController {
  constructor(private readonly discoverService: DiscoverService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createDiscoverDto: CreateDiscoverDto) {
    return this.discoverService.create(createDiscoverDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.discoverService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.discoverService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateDiscoverDto: UpdateDiscoverDto) {
    return this.discoverService.update(+id, updateDiscoverDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.discoverService.remove(+id);
  }
}
