import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpUserDto } from './entity/user.dto';
import { User } from './entity/user.entity';
import { UserRepository } from './entity/user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  public async signUp(dto: SignUpUserDto): Promise<void> {
    if (await this.userRepository.findUserByEmail(dto.email)) {
      throw new BadRequestException('Email is already registered');
    }

    dto.password = bcrypt.hashSync(dto.password, 12);
    await this.userRepository.signUp(dto);
  }

  public async login({
    id,
  }: {
    id: number;
  }): Promise<{ access_token: string; refresh_token: string }> {
    const access_token = this.generateToken({
      id,
      type: 'access',
    });
    const refresh_token = this.generateToken({
      id,
      type: 'refresh',
    });

    return { access_token, refresh_token };
  }

  public async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findUserByEmail(email);
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  private generateToken({ id, type }: { id: number; type: string }) {
    return this.jwtService.sign(
      { id, type },
      {
        expiresIn: type === 'access' ? '2h' : type === 'refresh' ? '14d' : 0,
      },
    );
  }
}
