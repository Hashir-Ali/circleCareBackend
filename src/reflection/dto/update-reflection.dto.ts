import { PartialType } from '@nestjs/swagger';
import { CreateReflectionDto } from './create-reflection.dto';

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateReflectionDto extends PartialType(CreateReflectionDto) {
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    status: number;
}
