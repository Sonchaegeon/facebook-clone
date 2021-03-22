import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpUserDto } from './entity/user.dto';
import { User } from './entity/user.entity';
import { UserRepository } from './entity/user.repository';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private userRepository: UserRepository) {}

  public async signUp(dto: SignUpUserDto): Promise<void> {
    if (await this.userRepository.findUserByEmail(dto.email)) {
      throw new BadRequestException('Email is already registered');
    }
    await this.userRepository.signUp(dto);
  }
}
