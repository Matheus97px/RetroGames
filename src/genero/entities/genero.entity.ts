import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jogo } from "../../jogo/entities/jogo.entity";

@Entity({ name: "tb_genero" })
export class Genero {
    
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @OneToMany(() => Jogo, (jogo) => jogo.genero)
    jogo: Jogo[]
}