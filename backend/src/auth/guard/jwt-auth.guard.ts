import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TokenExpiredError } from 'jsonwebtoken';
import {
  ExpiredTokenError,
  InternalServerError,
} from 'src/common/apollo/apollo-exception.index';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info: Error) {
    if (info instanceof TokenExpiredError) {
      throw ExpiredTokenError;
    } else if (err) {
      throw InternalServerError;
    }
    return user;
  }
}
