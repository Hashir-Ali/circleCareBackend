import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    first_name: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    last_name: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    gender: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    date: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    age: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    is_user_18: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    marital_status: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsEmail()
    email: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    password: string;


    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    is_google: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    is_facebook: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    is_icloud: boolean;
    
}