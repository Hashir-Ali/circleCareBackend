import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRecordDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    user_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    record_date: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    BP_systole: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    BP_diastole: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    sugar_level: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    sleeping_hours: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    weight: number;
}
