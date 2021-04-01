import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetPostsArgs } from './dto/args/get-posts.args';
import { Post } from './entity/post.entity';
import { PostRepository } from './entity/post.repository';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private postRepository: PostRepository) {}

  public async getPosts(getPostsArgs: GetPostsArgs): Promise<Post[]> {
    return await this.postRepository.getPosts(getPostsArgs);
  }
}
