import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    tasks_title: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    task_text: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    task_type: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    task_date: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    is_active: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    is_done: boolean;

    @ApiPropertyOptional()
    @IsOptional()
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
