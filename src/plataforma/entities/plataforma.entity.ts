import { IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jogo } from "../../jogo/entities/jogo.entity";
import { Fabricante } from "../../fabricante/entities/fabricante.entity";


@Entity({ name: "tb_plataforma" })
export class Plataforma {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column("decimal", { precision: 10, scale: 2 })
    preco: number;

    @IsNotEmpty()
    @Column()
    quantidade: number

    @OneToMany(() => Jogo, (jogo) => jogo.plataforma)
    jogo: Jogo[]

    @ManyToOne(() => Fabricante, (fabricante) => fabricante.plataforma, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: "fabricante_id" })
    fabricante: Fabricante


}