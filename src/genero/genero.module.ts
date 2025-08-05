import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Genero } from "./entities/genero.entity";
import { GeneroController } from "./controller/genero.controller";
import { GeneroService } from "./services/genero.service";


@Module({
    imports: [TypeOrmModule.forFeature([Genero])],
    controllers: [GeneroController],
    providers: [GeneroService],
    exports: [GeneroService]
})
export class GeneroModule {}