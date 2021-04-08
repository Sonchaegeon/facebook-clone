import { Injectable, UseFilters } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { HttpExceptionFilter } from 'src/common/http/http-exception.filter';
import { UnauthorizedError } from 'src/common/http/http-exception.index';
import { AuthService } from '../auth.service';

@UseFilters(HttpExceptionFilter)
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw UnauthorizedError;
    }
    return user;
  }
}
