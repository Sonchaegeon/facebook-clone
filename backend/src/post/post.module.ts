import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/entity/user.repository';
import { PostUserViewRepository } from './entity/post-view.repository';
import { PostRepository } from './entity/post.repository';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PostRepository,
      UserRepository,
      PostUserViewRepository,
    ]),
  ],
  providers: [PostResolver, PostService],
})
export class PostModule {}
