import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    tasks_title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    task_text: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    task_type: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    task_date: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    is_active: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    is_done: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    is_video: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    video_link: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    img_thumbnail: string;
}
