import { EntityRepository, Repository } from 'typeorm';
import { GetPostsArgs } from '../dto/args/get-posts.args';
import { PostUserView } from './post-view.entity';
import { Post } from './post.entity';

@EntityRepository(PostUserView)
export class PostUserViewRepository extends Repository<PostUserView> {
  public async getPosts(getPostsArgs: GetPostsArgs): Promise<Post[]> {
    return await this.createQueryBuilder('view')
      .select('view.contents', 'contents')
      .addSelect('view.post_created_at', 'created_at')
      .addSelect('view.post_id', 'id')
      .where('view.user_id = :user_id', { user_id: getPostsArgs.userId })
      .getRawMany();
  }

  public async existUserPost(postId: number, userId: number): Promise<boolean> {
    const postRecord = await this.createQueryBuilder('view')
      .select('view.contents', 'contents')
      .where('view.user_id = :user_id AND view.post_id = :post_id', {
        user_id: userId,
        post_id: postId,
      })
      .getRawOne();

    return !!postRecord;
  }
}
