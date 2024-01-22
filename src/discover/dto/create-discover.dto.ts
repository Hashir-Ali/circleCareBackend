import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateDiscoverDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    image_thumb: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    paras: string[];

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    is_video: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    is_care: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    is_active: boolean;

}
