import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async signIn(createAuthDto: CreateAuthDto) {
    const { username, password } = createAuthDto;
    try {
      if (username === '' || password === '')
        throw new Error('Credenciales no validas.');

      const userExists = await this.userRepository.findOne({
        where: [
          { username, password },
          { email: username, password },
        ],
      });

      if (!userExists)
        throw new NotFoundException('Estas credenciales no son validas.');

      return userExists;
    } catch (error) {
      throw new Error('Error en el proceso de autenticacion.');
    }
  }
}
