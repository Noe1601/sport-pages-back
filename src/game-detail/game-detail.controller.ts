import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameDetailService } from './game-detail.service';
import { CreateGameDetailDto } from './dto/create-game-detail.dto';
import { UpdateGameDetailDto } from './dto/update-game-detail.dto';

@Controller('game-detail')
export class GameDetailController {
  constructor(private readonly gameDetailService: GameDetailService) {}

  @Post()
  create(@Body() createGameDetailDto: CreateGameDetailDto) {
    return this.gameDetailService.create(createGameDetailDto);
  }

  @Get()
  findAll() {
    return this.gameDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDetailDto: UpdateGameDetailDto) {
    return this.gameDetailService.update(+id, updateGameDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameDetailService.remove(+id);
  }
}
