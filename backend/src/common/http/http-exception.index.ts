import { BadRequestException, UnauthorizedException } from '@nestjs/common';

// 400
export const EmailAlreadyExistError = new BadRequestException(
  'Email already exist error',
);

// 401
export const UnauthorizedError = new UnauthorizedException(
  'Unauthorized error',
);
