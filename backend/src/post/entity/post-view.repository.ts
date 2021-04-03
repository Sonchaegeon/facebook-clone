import { EntityRepository, Repository } from 'typeorm';
import { GetPostsArgs } from '../dto/args/get-posts.args';
import { PostUserView } from './post-view.entity';
import { Post } from './post.entity';

@EntityRepository(PostUserView)
export class PostUserViewRepository extends Repository<PostUserView> {
  public async getPosts(getPostsArgs: GetPostsArgs): Promise<Post[]> {
    return this.createQueryBuilder('view')
      .select('view.contents', 'contents')
      .addSelect('view.post_created_at', 'created_at')
      .addSelect('view.post_id', 'id')
      .where('view.user_id = :user_id', { user_id: getPostsArgs.userId })
      .getRawMany();
  }
}
