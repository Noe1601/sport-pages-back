import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  team1: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  team2: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  scoreTeam1: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  scoreTeam2: string;

  @IsNotEmpty()
  @IsDate()
  date: string;

  @IsNotEmpty()
  @IsString()
  type: string;
}
