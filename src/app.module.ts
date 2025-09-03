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
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna as variáveis disponíveis globalmente
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '3306', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Jogo, Genero, Plataforma, Fabricante, User],
      synchronize:  process.env.NODE_ENV === 'development',
      logging:  process.env.NODE_ENV === 'development'
    }),
    JogoModule, GeneroModule , PlataformaModule , FabricanteModule , AuthModule , UserModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
