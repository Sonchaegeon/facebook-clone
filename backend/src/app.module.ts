import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionOptions } from './config';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [connectionOptions],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get(process.env.NODE_ENV),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    AuthModule,
    PostModule,
  ],
})
export class AppModule {}
