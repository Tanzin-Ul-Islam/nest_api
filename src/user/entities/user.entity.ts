import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @ApiProperty()
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    name: string;

    @ApiProperty()
    @Column({
        nullable: true,
        default: " "
    })
    email: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    password: string;
}