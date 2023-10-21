import { Test, TestingModule } from '@nestjs/testing';
import { GameDetailController } from './game-detail.controller';
import { GameDetailService } from './game-detail.service';

describe('GameDetailController', () => {
  let controller: GameDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameDetailController],
      providers: [GameDetailService],
    }).compile();

    controller = module.get<GameDetailController>(GameDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
