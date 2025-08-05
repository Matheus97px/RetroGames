import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Jogo } from "./entities/jogo.entity";
import { JogoController } from "./controller/jogo.controller";
import { JogoService } from "./services/jogo.service";
import { GeneroModule } from "../genero/genero.module";
import { PlataformaModule } from "../plataforma/plataforma.module";
import { FabricanteModule } from "../fabricante/fabricante.module";

@Module({
    imports: [TypeOrmModule.forFeature([Jogo]), GeneroModule, PlataformaModule, FabricanteModule],
    controllers: [JogoController],
    providers: [JogoService],
    exports: []
})

export class JogoModule {}