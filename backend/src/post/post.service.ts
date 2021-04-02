import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { User } from 'src/auth/entity/user.entity';
import { UserRepository } from 'src/auth/entity/user.repository';
import { TokenPayload } from 'src/auth/interface/payload.interface';
import { GetPostsArgs } from './dto/args/get-posts.args';
import { CreatePostInput } from './dto/input/create-post.input';
import { Post } from './entity/post.entity';
import { PostRepository } from './entity/post.repository';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: PostRepository,
    @InjectRepository(User) private userRepository: UserRepository,
  ) {}

  public async getPosts(getPostsArgs: GetPostsArgs): Promise<Post[]> {
    return await this.postRepository.getPosts(getPostsArgs);
  }

  public async createPost(
    createPostData: CreatePostInput,
    userId: number,
  ): Promise<Post> {
    const user = await this.userRepository.findOne(userId);
    return await this.postRepository.createPost(createPostData, user);
  }
}
