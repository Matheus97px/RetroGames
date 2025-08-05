import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Fabricante } from "./entities/fabricante.entity";
import { FabricanteController } from "./controller/fabricante.controller";
import { FabricanteService } from "./services/fabricante.service";

@Module({
    imports: [TypeOrmModule.forFeature([Fabricante])],
    controllers: [FabricanteController],
    providers: [FabricanteService],
    exports: [FabricanteService]
})
export class FabricanteModule {}