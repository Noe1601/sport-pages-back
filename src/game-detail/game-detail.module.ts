import { Module } from '@nestjs/common';
import { GameDetailService } from './game-detail.service';
import { GameDetailController } from './game-detail.controller';

@Module({
  controllers: [GameDetailController],
  providers: [GameDetailService]
})
export class GameDetailModule {}
