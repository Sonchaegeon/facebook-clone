import { User } from 'src/auth/entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { GetPostsArgs } from '../dto/args/get-posts.args';
import { CreatePostInput } from '../dto/input/create-post.input';
import { Post } from './post.entity';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  private newPost: Post;

  public async getPosts(getPostsArgs: GetPostsArgs): Promise<Post[]> {
    return this.createQueryBuilder('post')
      .innerJoin('post.user', 'user')
      .select('post.id', 'id')
      .addSelect('post.contents', 'contents')
      .where('user.id = :user_id', { user_id: getPostsArgs.userId })
      .getRawMany();
  }

  public async createPost(
    createPostData: CreatePostInput,
    user: User,
  ): Promise<Post> {
    this.newPost = this.create({ ...createPostData, user });
    return await this.save(this.newPost);
  }
}
