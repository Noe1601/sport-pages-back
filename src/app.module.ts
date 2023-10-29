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
      host: 'db-postgresql-nyc3-95168-do-user-15007909-0.c.db.ondigitalocean.com',
      username: 'doadmin',
      password: 'AVNS_uZ0WIPo4HlZG9_fEsBn',
      port: 25060,
      database: 'defaultdb',
      synchronize: true,
      entities,
      autoLoadEntities: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }
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
