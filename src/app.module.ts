import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { GamesModule } from './games/games.module';
import { GameDetailModule } from './game-detail/game-detail.module';
import entities from '../common/entities';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: '123456',
      port: 5432,
      database: 'postgres',
      synchronize: true,
      entities,
      autoLoadEntities: true,
    }),
    UsersModule,
    AuthModule,
    GamesModule,
    GameDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
