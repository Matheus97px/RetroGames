import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Plataforma } from "./entities/plataforma.entity";
import { PlataformaController } from "./controller/plataforma.controller";
import { PlataformaService } from "./services/plataforma.service";
import { FabricanteModule } from "../fabricante/fabricante.module";


@Module({
    imports: [TypeOrmModule.forFeature([Plataforma]),FabricanteModule],
    controllers: [PlataformaController],
    providers: [PlataformaService],
    exports: [PlataformaService]
})
export class PlataformaModule {}