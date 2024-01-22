import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateQuestionDto } from './create-question.dto';
import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    quiz_id: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsObject()
    text?: {en: string; ar: string;}

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    answer_type?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    date_added: string;
}
