import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateDiscoverDto } from './create-discover.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateDiscoverDto extends PartialType(CreateDiscoverDto) {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    type: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    title: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    image_thumb: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    paras: string[];

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    is_video?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    is_care?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    is_active?: boolean;
    
}
