import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateQuestionnaireDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    month: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    date: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    status: boolean;
}
