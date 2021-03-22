import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth/auth.controller';
import { connectionOptions } from './config';

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
  ],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
