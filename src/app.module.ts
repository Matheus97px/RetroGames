import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogoModule } from './jogo/jogo.module';
import { Jogo } from './jogo/entities/jogo.entity';
import { ConfigModule } from '@nestjs/config';
import { Genero } from './genero/entities/genero.entity';
import { GeneroModule } from './genero/genero.module';
import { Plataforma } from './plataforma/entities/plataforma.entity';
import { PlataformaModule } from './plataforma/plataforma.module';
import { Fabricante } from './fabricante/entities/fabricante.entity';
import { FabricanteModule } from './fabricante/fabricante.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.module';
import { AppController } from './app.controller';
import { ProdService } from './data/services/prod.service';
import { DevService } from './data/services/dev.service';
@Module({
  imports: [
   ConfigModule.forRoot(),
  TypeOrmModule.forRootAsync({
	useClass: DevService,
    imports: [ConfigModule],
}),
    JogoModule, GeneroModule , PlataformaModule , FabricanteModule , AuthModule , UserModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
