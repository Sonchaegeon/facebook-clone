import {
  GoneException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TokenExpiredError } from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info: Error) {
    if (info instanceof TokenExpiredError) {
      throw new GoneException('Token expired');
    } else if (err) {
      throw new InternalServerErrorException();
    }
    return user;
  }
}
