import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateUserQuestionnaireDto } from './create-user-questionnaire.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserQuestionnaireDto extends PartialType(CreateUserQuestionnaireDto) {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    user_id: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    questionnaire_id?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    question_id?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    selected_options?: { en: string; ar?: string; } | { en: string; ar?: string; }[];
    
}
