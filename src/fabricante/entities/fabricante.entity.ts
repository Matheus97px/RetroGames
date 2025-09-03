import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jogo } from "../../jogo/entities/jogo.entity";
import { Plataforma } from "../../plataforma/entities/plataforma.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({ name: 'tb_fabricante' })
export class Fabricante {

    @PrimaryGeneratedColumn()
    @ApiProperty()   
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    descricao: string

    @ApiProperty()   
    @OneToMany(()=> Jogo, (jogo) => jogo.fabricante)
    jogo: Jogo[]

    @ApiProperty()   
    @OneToMany(()=> Plataforma, (plataforma) => plataforma.fabricante)
    plataforma: Plataforma[]
}