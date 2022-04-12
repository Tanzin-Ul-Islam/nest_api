import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsOptional, MaxLength, MinLength } from "class-validator";

export class UpdateUserDto {
    @ApiProperty()
    @IsAlphanumeric()
    name: string;

    @ApiProperty()
    @IsEmail()
    @IsOptional()
    email: string;


    @ApiProperty()
    @MinLength(4)
    @MaxLength(20)
    password: string;
}