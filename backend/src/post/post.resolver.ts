import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorator/current-user.decorator';
import { GqlAuthGuard } from 'src/auth/guard/gql-auth.guard';
import { GetPostsArgs } from './dto/args/get-posts.args';
import { CreatePostInput, UpdatePostInput } from './dto/input';
import { Post } from './entity/post.entity';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post], { name: 'posts', nullable: 'items' })
  public async getPosts(@Args() getPostsArgs: GetPostsArgs): Promise<Post[]> {
    return await this.postService.getPosts(getPostsArgs);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Post)
  public async createPost(
    @Args('createPostData') createPostData: CreatePostInput,
    @CurrentUser() userId: number,
  ): Promise<Post> {
    return await this.postService.createPost(createPostData, userId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Post)
  public async updatePost(
    @Args('updatePostData') updatePostData: UpdatePostInput,
    @CurrentUser() userId: number,
  ): Promise<Post> {
    return await this.postService.updatePost(updatePostData, userId);
  }
}
