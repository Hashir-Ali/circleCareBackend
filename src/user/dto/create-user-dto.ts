import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
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

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;


    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    is_google: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    is_facebook: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    is_icloud: boolean;

    
}