import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jogo } from "../../jogo/entities/jogo.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "tb_genero" })
export class Genero {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    @ApiProperty()
    nome: string

    @ApiProperty()
    @OneToMany(() => Jogo, (jogo) => jogo.genero)
    jogo: Jogo[]
}