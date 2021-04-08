import { ArgumentsHost, Catch, HttpException, Logger } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';

@Catch(HttpException)
export class ApolloExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHostPath = GqlArgumentsHost.create(host).getInfo().path;
    Logger.error(
      exception.message,
      JSON.stringify(gqlHostPath),
      'ApolloExceptionFilter',
    );
    return exception;
  }
}
