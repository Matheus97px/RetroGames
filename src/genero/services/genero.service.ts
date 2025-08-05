import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Genero } from "../entities/genero.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class GeneroService {
    constructor(
        @InjectRepository(Genero)
        private generoRepository: Repository<Genero>
    ) { }
    
    async findAll(): Promise<Genero[]> {
        return await this.generoRepository.find({
            relations:{jogo: true}
        });
    }

    async findById(id: number): Promise<Genero> {
        let genero = await this.generoRepository.findOne({
            where: { id }, relations: { jogo: true } 
        });
        
        if (!genero) {
            throw new HttpException("Genero não encontrado!", HttpStatus.NOT_FOUND);
        }

        return genero;
    }

    async findAllByGeneroName(generoName: string): Promise<Genero[]> {
        return await this.generoRepository.find({
            where: {
                nome: ILike(`%${generoName}%`)
            },
            relations: { jogo: true }
        })
    }

    async create(genero: Genero): Promise<Genero> {
        return await this.generoRepository.save(genero);
    }

    async update(genero: Genero): Promise<Genero> {
       if (!genero.id) {
        throw new HttpException("Genero nao encontrado!", HttpStatus.NOT_FOUND);
       }
       
        await this.findById(genero.id);

        return await this.generoRepository.save(genero);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);
        return await this.generoRepository.delete(id);
    }


}