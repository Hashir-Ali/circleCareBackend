import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';

export class CreateQuestionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    quiz_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    text: {en: string; ar?: string;}

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    answer_type: number; // 0 is select 1 from radio, 2 is select from dropdown options.

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    date_added: string;

}
