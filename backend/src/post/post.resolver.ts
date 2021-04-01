import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetPostsArgs } from './dto/args/get-posts.args';
import { Post } from './entity/post.entity';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post], { name: 'posts', nullable: 'items' })
  public async getPosts(@Args() getPostsArgs: GetPostsArgs): Promise<Post[]> {
    return await this.postService.getPosts(getPostsArgs);
  }
}
