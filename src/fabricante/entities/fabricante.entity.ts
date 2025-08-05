import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jogo } from "../../jogo/entities/jogo.entity";
import { Plataforma } from "../../plataforma/entities/plataforma.entity";


@Entity({ name: 'tb_fabricante' })
export class Fabricante {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string

    @OneToMany(()=> Jogo, (jogo) => jogo.fabricante)
    jogo: Jogo[]

    @OneToMany(()=> Plataforma, (plataforma) => plataforma.fabricante)
    plataforma: Plataforma[]
}