import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateUserQuestionnaireDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    user_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    questionnaire_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    selected_options: {en: string; ar?: string;} | {en: string; ar?: string;}[];
}