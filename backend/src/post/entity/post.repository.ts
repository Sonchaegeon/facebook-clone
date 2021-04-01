import { EntityRepository, Repository } from 'typeorm';
import { GetPostsArgs } from '../dto/args/get-posts.args';
import { Post } from './post.entity';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  public async getPosts(getPostsArgs: GetPostsArgs): Promise<Post[]> {
    return this.createQueryBuilder('post')
      .innerJoin('post.user', 'user')
      .select('post.id', 'id')
      .addSelect('post.contents', 'contents')
      .where('user.id = :user_id', { user_id: getPostsArgs.userId })
      .getRawMany();
  }
}
