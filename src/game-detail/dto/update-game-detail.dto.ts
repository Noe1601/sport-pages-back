import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDetailDto } from './create-game-detail.dto';

export class UpdateGameDetailDto extends PartialType(CreateGameDetailDto) {}
