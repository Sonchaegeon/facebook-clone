import {
  UserInputError,
  AuthenticationError,
  ForbiddenError as ForbiddenApolloError,
  ApolloError,
} from 'apollo-server-errors';

// 400
export const EmailAlreadyExistError = new UserInputError(
  'Email already exist error',
);

// 401
export const UnauthorizedError = new AuthenticationError('Unauthorized error');

// 403
export const ForbiddenError = new ForbiddenApolloError('Forbidden error');

// 404
export const NotFoundError = new ApolloError('User not found');

// 410
export const ExpiredTokenError = new ApolloError('Token expired');

// 500
export const InternalServerError = new ApolloError('Internal server error');
