import { IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Genero } from "../../genero/entities/genero.entity";
import { Plataforma } from "../../plataforma/entities/plataforma.entity";
import { Fabricante } from "../../fabricante/entities/fabricante.entity";


@Entity({name: "tb_jogos"})
export class Jogo {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    sinopse: string

    @IsNotEmpty()
    @Column("decimal", { precision: 10, scale: 2 })
    preco: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    tipo: string

    @IsNotEmpty()
    @Column()
    quantidade: number
    

    @ManyToOne(() => Genero, (genero) => genero.jogo,{
        onDelete: "CASCADE"
    })
    @JoinColumn({name: "genero_id"})
    genero: Genero



    @ManyToOne(() => Plataforma, (plataforma) => plataforma.jogo, {
        onDelete: "CASCADE"
    })
    @JoinColumn({name: "plataforma_id"})
    plataforma: Plataforma



    @ManyToOne(() => Fabricante, (fabricante) => fabricante.jogo, {
        onDelete: "CASCADE"
    })
    @JoinColumn({name: "fabricante_id"})
    fabricante: Fabricante
}