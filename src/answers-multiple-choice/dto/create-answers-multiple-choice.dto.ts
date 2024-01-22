import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsObject, IsString } from "class-validator";

export class CreateAnswersMultipleChoiceDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    text: {en: string; ar?: string};
}
