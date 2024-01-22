import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateAnswersMultipleChoiceDto } from './create-answers-multiple-choice.dto';
import { IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateAnswersMultipleChoiceDto extends PartialType(CreateAnswersMultipleChoiceDto) {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    question_id?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsObject()
    text: {en: string; ar?: string}
}
