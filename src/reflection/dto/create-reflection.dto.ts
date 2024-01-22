import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateReflectionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    user_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    date: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    status: number;
}
