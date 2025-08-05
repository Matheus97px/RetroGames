import { Controller, Get, HttpStatus, HttpCode, Param, ParseIntPipe, Post, Body, Put, Delete } from "@nestjs/common";
import { FabricanteService } from "../services/fabricante.service";
import { Fabricante } from "../entities/fabricante.entity";


@Controller('/fabricante')
export class FabricanteController {
    constructor(private readonly fabricanteService: FabricanteService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Fabricante[]> {
        return this.fabricanteService.findAll();
    }

    
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Fabricante> {
        return this.fabricanteService.findById(id);
    }

    @Get('/nome/:fabricanteName')
    @HttpCode(HttpStatus.OK)
    findAllByFabricanteName(@Param('fabricanteName') fabricante: string): Promise<Fabricante[]> {
        return this.fabricanteService.findAllByFabricanteName(fabricante);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() fabricante: Fabricante): Promise<Fabricante> {
        return this.fabricanteService.create(fabricante);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() fabricante: Fabricante): Promise<Fabricante> {
        return this.fabricanteService.update(fabricante);
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.fabricanteService.delete(id);
    }



}