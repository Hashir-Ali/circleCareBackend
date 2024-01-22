import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateQuestionnaireDto } from './create-questionnaire.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateQuestionnaireDto extends PartialType(CreateQuestionnaireDto) {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    title?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    status?: boolean;
}
