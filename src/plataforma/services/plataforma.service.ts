import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Plataforma } from "../entities/plataforma.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { FabricanteService } from "../../fabricante/services/fabricante.service";

@Injectable()
export class PlataformaService {
    constructor(
        @InjectRepository(Plataforma)
        private plataformaRepository: Repository<Plataforma>,
        private fabricanteService: FabricanteService
    ) { }

    async findAll(): Promise<Plataforma[]> {
        return await this.plataformaRepository.find({
            relations: { jogo: true, fabricante: true }
        });
    }

    async findById(id: number): Promise<Plataforma> {
        let plataforma = await this.plataformaRepository.findOne({
            where: { id }, relations: { jogo: true, fabricante: true }
        });

        if (!plataforma) {
            throw new HttpException("Plataforma não encontrado!", HttpStatus.NOT_FOUND);
        }

        return plataforma;
    }

    async findAllByPlataformaName(plataformaName: string): Promise<Plataforma[]> {
        return await this.plataformaRepository.find({
            where: {
                nome: ILike(`%${plataformaName}%`)
            },
            relations: { jogo: true, fabricante: true }
        })
    }

    async create(plataforma: Plataforma): Promise<Plataforma> {
        if (!plataforma.fabricante || !plataforma.fabricante.id) {
            throw new HttpException("Fabricante nao encontrado!", HttpStatus.NOT_FOUND);
        }
        await this.fabricanteService.findById(plataforma.fabricante.id);
        return await this.plataformaRepository.save(plataforma);
    }

    async update(plataforma: Plataforma): Promise<Plataforma> {
        if (!plataforma.id) {
            throw new HttpException("Plataforma nao encontrado!", HttpStatus.NOT_FOUND);
        }

        await this.findById(plataforma.id);

        if (!plataforma.fabricante || !plataforma.fabricante.id) {
            throw new HttpException("Fabricante nao encontrado!", HttpStatus.NOT_FOUND);
        }

        await this.fabricanteService.findById(plataforma.fabricante.id);

        return await this.plataformaRepository.save(plataforma);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);
        return await this.plataformaRepository.delete(id);
    }


}