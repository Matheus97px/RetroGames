import { IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jogo } from "../../jogo/entities/jogo.entity";
import { Fabricante } from "../../fabricante/entities/fabricante.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({ name: "tb_plataforma" })
export class Plataforma {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    @ApiProperty()
    nome: string;

    @IsNotEmpty()
    @Column("decimal", { precision: 10, scale: 2 })
    @ApiProperty()
    preco: number;

    @IsNotEmpty()
    @Column()
    @ApiProperty()
    quantidade: number

    @ApiProperty()
    @OneToMany(() => Jogo, (jogo) => jogo.plataforma)
    jogo: Jogo[]

    @ApiProperty({ type: () => Fabricante })
    @ManyToOne(() => Fabricante, (fabricante) => fabricante.plataforma, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: "fabricante_id" })
    fabricante: Fabricante


}