import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
  ) {}

  async create(createGameDto: CreateGameDto) {
    try {
      const game = this.gameRepository.create(createGameDto);
      return await this.gameRepository.save(game);
    } catch (error) {
      throw new Error();
    }
  }

  async findAll() {
    try {
      return await this.gameRepository.find();
    } catch (error) {
      throw new Error();
    }
  }

  async findOne(term: string) {
    try {
      return await this.gameRepository.findOne({
        where: {
          id: term,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, updateGameDto: UpdateGameDto) {
    try {
      const existGame = await this.gameRepository.findOne({
        where: {
          id,
        },
      });

      if (!existGame)
        throw new NotFoundException(
          'No existe ningun juego con este identificador.',
        );

      await this.gameRepository.update(id, updateGameDto);
    } catch (error) {
      throw new Error();
    }
  }

  async findByType(type: string) {
    try {
      return await this.gameRepository.find({
        where: {
          type,
        },
      });
    } catch (error) {
      throw new Error();
    }
  }
}
