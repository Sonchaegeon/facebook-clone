import { User } from 'src/auth/entity/user.entity';
import { EntityRepository, Repository, UpdateResult } from 'typeorm';
import { GetPostsArgs } from '../dto/args/get-posts.args';
import { UpdatePostInput } from '../dto/input';
import { CreatePostInput } from '../dto/input/create-post.input';
import { Post } from './post.entity';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  private newPost: Post;

  public async createPost(
    createPostData: CreatePostInput,
    user: User,
  ): Promise<Post> {
    this.newPost = this.create({ ...createPostData, user });
    return await this.save(this.newPost);
  }

  public async updatePost(
    updatePostData: UpdatePostInput,
  ): Promise<UpdateResult> {
    return await this.update(updatePostData.id, {
      contents: updatePostData.contents,
    });
  }
}
