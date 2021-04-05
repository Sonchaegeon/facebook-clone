import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { UserRepository } from 'src/auth/entity/user.repository';
import { ForbiddenError, NotFoundError } from 'src/common/http-exception.index';
import { GetPostsArgs } from './dto/args/get-posts.args';
import { CreatePostInput, UpdatePostInput, DeletePostInput } from './dto/input';
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
    if (!user) {
      throw NotFoundError;
    }

    return await this.postRepository.createPost(createPostData, user);
  }

  public async updatePost(
    updatePostData: UpdatePostInput,
    userId: number,
  ): Promise<Post> {
    const user = await this.userRepository.findOne(userId);
    const isExist = await this.postUserViewRepository.existUserPost(
      updatePostData.id,
      user.id,
    );
    if (!user) {
      throw NotFoundError;
    }
    if (!isExist) {
      throw ForbiddenError;
    }

    await this.postRepository.updatePost(updatePostData);
    return await this.postRepository.findOne(updatePostData.id);
  }

  public async deletePost(
    deletePostData: DeletePostInput,
    userId: number,
  ): Promise<Post> {
    const user = await this.userRepository.findOne(userId);
    const isExist = await this.postUserViewRepository.existUserPost(
      deletePostData.id,
      user.id,
    );
    if (!user) {
      throw NotFoundError;
    }
    if (!isExist) {
      throw ForbiddenError;
    }

    await this.postRepository.deletePost(deletePostData);
    return isExist;
  }
}
