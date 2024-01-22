import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserTaskDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    task_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    user_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    user_done: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    user_delete: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    date_updated: string;

}
