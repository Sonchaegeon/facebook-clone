import { ArgumentsHost, Catch, HttpException, Logger } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    Logger.error(exception.message);
    return exception;
  }
}
