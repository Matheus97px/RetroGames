import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jogo } from "../../jogo/entities/jogo.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: "tb_users"})
export class User {

    @PrimaryGeneratedColumn()
     @ApiProperty() 
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
     @ApiProperty() 
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
     @ApiProperty() 
    username: string;

    @MinLength(6)
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
     @ApiProperty() 
    password: string

    @Column({length: 5000})
     @ApiProperty() 
    foto: string

     @ApiProperty() 
    @OneToMany(() => Jogo, (jogo) => jogo.user)
    jogo: Jogo[]
}