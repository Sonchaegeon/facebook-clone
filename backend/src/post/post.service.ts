import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { UserRepository } from 'src/auth/entity/user.repository';
import { GetPostsArgs } from './dto/args/get-posts.args';
import { CreatePostInput, UpdatePostInput } from './dto/input';
import { PostUserView } from './entity/post-view.entity';
import { PostUserViewRepository } from './entity/post-view.repository';
import { Post } from './entity/post.entity';
import { PostRepository } from './entity/post.repository';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: PostRepository,
    @InjectRepository(User) private userRepository: UserRepository,
    @InjectRepository(PostUserView)
    private postUserViewRepository: PostUserViewRepository,
  ) {}

  public async getPosts(getPostsArgs: GetPostsArgs): Promise<Post[]> {
    return await this.postUserViewRepository.getPosts(getPostsArgs);
  }

  public async createPost(
    createPostData: CreatePostInput,
    userId: number,
  ): Promise<Post> {
    const user = await this.userRepository.findOne(userId);
    return await this.postRepository.createPost(createPostData, user);
  }

  public async updatePost(updatePostData: UpdatePostInput, userId: number) {}
}
