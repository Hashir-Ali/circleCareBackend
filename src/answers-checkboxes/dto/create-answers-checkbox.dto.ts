import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';


export class CreateAnswersCheckboxDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    text: {en: string; ar?: string}

    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    options: {en: string; ar?: string}[]
}
