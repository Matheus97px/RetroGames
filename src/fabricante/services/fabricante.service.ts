import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Fabricante } from "../entities/fabricante.entity";
import { DeleteResult, ILike, Repository } from "typeorm";


@Injectable()
export class FabricanteService {
    constructor(
        @InjectRepository(Fabricante)
        private fabricanteRepository: Repository<Fabricante>
    )   {}

    async findAll(): Promise<Fabricante[]> {
        return await this.fabricanteRepository.find({
            relations: { jogo: true, plataforma: true }
        });
    }

    async findById(id: number): Promise<Fabricante> {
        let fabricante = await this.fabricanteRepository.findOne({
            where: { id }, relations: { jogo: true, plataforma: true }
        });
        
        if (!fabricante) {
            throw new HttpException("Fabricante nao encontrado!", HttpStatus.NOT_FOUND);
        }

        return fabricante;
    }    


    async findAllByFabricanteName(fabricanteName: string): Promise<Fabricante[]> {
        return await this.fabricanteRepository.find({
            where: {
                nome: ILike(`%${fabricanteName}%`)
            },
            relations: { jogo: true, plataforma: true }
        })
    }

    async create(fabricante: Fabricante): Promise<Fabricante> {
        return await this.fabricanteRepository.save(fabricante);
    }

    async update(fabricante: Fabricante): Promise<Fabricante> {
        if (!fabricante.id) {
            throw new HttpException("Fabricante nao encontrado!", HttpStatus.NOT_FOUND);
        }

        await this.findById(fabricante.id);

        return await this.fabricanteRepository.save(fabricante);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);
        return await this.fabricanteRepository.delete(id);
    }


}