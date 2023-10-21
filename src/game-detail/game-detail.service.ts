import { Injectable } from '@nestjs/common';
import { CreateGameDetailDto } from './dto/create-game-detail.dto';
import { UpdateGameDetailDto } from './dto/update-game-detail.dto';

@Injectable()
export class GameDetailService {
  create(createGameDetailDto: CreateGameDetailDto) {
    return 'This action adds a new gameDetail';
  }

  findAll() {
    return `This action returns all gameDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameDetail`;
  }

  update(id: number, updateGameDetailDto: UpdateGameDetailDto) {
    return `This action updates a #${id} gameDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameDetail`;
  }
}
