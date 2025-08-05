import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Jogo } from "../entities/jogo.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { GeneroService } from "../../genero/services/genero.service";
import { PlataformaService } from "../../plataforma/services/plataforma.service";
import { FabricanteService } from "../../fabricante/services/fabricante.service";

@Injectable()
export class JogoService {
    constructor(
        @InjectRepository(Jogo)
        private jogoRepository: Repository<Jogo>,
        private generoService: GeneroService,
        private plataformaService: PlataformaService,
        private fabricanteService: FabricanteService
    ) { }

    async findAll(): Promise<Jogo[]> {
        return this.jogoRepository.find({
            relations: { genero: true, plataforma: true, fabricante: true }
        });
    }

    async findById(id: number): Promise<Jogo> {
        const jogo = await this.jogoRepository.findOne({
            where: { id },
            relations: { genero: true, plataforma: true, fabricante: true }
        });

        if (!jogo) {
            throw new HttpException('Jogo não encontrado!', HttpStatus.NOT_FOUND);
        }

        return jogo;
    }

    async findAllByTitulo(titulo: string): Promise<Jogo[]> {
        return await this.jogoRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            },
            relations: { genero: true, plataforma: true, fabricante: true }
        })
    }

    async create(jogo: Jogo): Promise<Jogo> {

        if (!jogo.genero || !jogo.genero.id) {
            throw new HttpException('Genero nao encontrado!', HttpStatus.NOT_FOUND);
        }

        await this.generoService.findById(jogo.genero.id);

        if (!jogo.plataforma || !jogo.plataforma.id) {
            throw new HttpException('Plataforma nao encontrado!', HttpStatus.NOT_FOUND);
        }

        await this.plataformaService.findById(jogo.plataforma.id);

        if (!jogo.fabricante || !jogo.fabricante.id) {
            throw new HttpException('Fabricante nao encontrado!', HttpStatus.NOT_FOUND);
        }

        await this.fabricanteService.findById(jogo.fabricante.id);

        return await this.jogoRepository.save(jogo);
    }


    async update(jogo: Jogo): Promise<Jogo> {
        if (!jogo.id) {
            throw new HttpException('Jogo não encontrado!', HttpStatus.NOT_FOUND);
        }
        await this.findById(jogo.id);

        if (!jogo.genero || !jogo.genero.id) {
            throw new HttpException('Genero nao encontrado!', HttpStatus.NOT_FOUND);
        }
        await this.generoService.findById(jogo.genero.id);

        if (!jogo.plataforma || !jogo.plataforma.id) {
            throw new HttpException('Plataforma nao encontrado!', HttpStatus.NOT_FOUND);
        }
        await this.plataformaService.findById(jogo.plataforma.id);

        if (!jogo.fabricante || !jogo.fabricante.id) {
            throw new HttpException('Fabricante nao encontrado!', HttpStatus.NOT_FOUND);
        }
        await this.fabricanteService.findById(jogo.fabricante.id);

        return await this.jogoRepository.save(jogo);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);

        return await this.jogoRepository.delete(id)
    }
}