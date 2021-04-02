import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/entity/user.repository';
import { PostRepository } from './entity/post.repository';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostRepository, UserRepository])],
  providers: [PostResolver, PostService],
})
export class PostModule {}
