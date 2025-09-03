import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Jogo } from "../../jogo/entities/jogo.entity";
import { Genero } from "../../genero/entities/genero.entity";
import { Plataforma } from "../../plataforma/entities/plataforma.entity";
import { Fabricante } from "../../fabricante/entities/fabricante.entity";
import { User } from "../../user/entities/user.module";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: process.env.DB_HOST,
            port: 3306,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [Jogo, Genero, Plataforma, Fabricante, User],
            synchronize: true,
    };
  }
}