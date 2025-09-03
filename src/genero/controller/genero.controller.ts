import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { GeneroService } from "../services/genero.service";
import { Genero } from "../entities/genero.entity";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";


@ApiTags('Genero')
@UseGuards(JwtAuthGuard)
@Controller('/generos')
@ApiBearerAuth()
export class GeneroController {
    constructor(private readonly generoService: GeneroService) { }


    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Genero[]> {
        return this.generoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Genero> {
        return this.generoService.findById(id);
    }


    @Get('/nome/:generoName')
    @HttpCode(HttpStatus.OK)
    findAllByGeneroName(@Param('generoName') genero: string): Promise<Genero[]> {
        return this.generoService.findAllByGeneroName(genero)
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() genero: Genero): Promise<Genero> {
        return this.generoService.create(genero);
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() genero: Genero): Promise<Genero> {
        return this.generoService.update(genero);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.generoService.delete(id);
    }



}