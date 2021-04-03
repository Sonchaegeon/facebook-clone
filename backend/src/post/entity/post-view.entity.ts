import { Connection, ViewColumn, ViewEntity } from 'typeorm';
import { Post } from './post.entity';

@ViewEntity({
  name: 'post_user_view',
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder(Post, 'post')
      .leftJoin('post.user', 'user')
      .select('post.id', 'post_id')
      .addSelect('user.id', 'user_id')
      .addSelect('post.contents', 'contents')
      .addSelect('post.created_at', 'post_created_at'),
})
export class PostUserView {
  @ViewColumn()
  post_id: number;

  @ViewColumn()
  user_id: number;

  @ViewColumn()
  contents: string;

  @ViewColumn()
  post_created_at: Date;
}
