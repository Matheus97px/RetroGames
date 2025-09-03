import { IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Genero } from "../../genero/entities/genero.entity";
import { Plataforma } from "../../plataforma/entities/plataforma.entity";
import { Fabricante } from "../../fabricante/entities/fabricante.entity";
import { User } from "../../user/entities/user.module";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: "tb_jogos"})
export class Jogo {

    @PrimaryGeneratedColumn()
    @ApiProperty() 
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty()
    titulo: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    @ApiProperty()
    sinopse: string

    @IsNotEmpty()
    @Column("decimal", { precision: 10, scale: 2 })
    @ApiProperty()
    preco: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty()
    tipo: string

    @IsNotEmpty()
    @Column()
    @ApiProperty()
    quantidade: number

    
    @Column({length: 5000})
    @ApiProperty() 
    foto: string
    

    @ApiProperty() 
    @ManyToOne(() => Genero, (genero) => genero.jogo,{
        onDelete: "CASCADE"
    })
    @JoinColumn({name: "genero_id"})
    genero: Genero



    @ApiProperty({type: () => Plataforma}) 
    @ManyToOne(() => Plataforma, (plataforma) => plataforma.jogo, {
        onDelete: "CASCADE"
    })
    @JoinColumn({name: "plataforma_id"})
    plataforma: Plataforma


    @ApiProperty({type: () => Fabricante}) 
    @ManyToOne(() => Fabricante, (fabricante) => fabricante.jogo, {
        onDelete: "CASCADE"
    })
    @JoinColumn({name: "fabricante_id"})
    fabricante: Fabricante

    @ApiProperty({type: () => User}) 
    @ManyToOne(() => User, (user) => user.jogo, {
        onDelete: "CASCADE"
    })
    @JoinColumn({name: "user_id"})
    user: User
}