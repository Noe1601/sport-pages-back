import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  email: string;
}
