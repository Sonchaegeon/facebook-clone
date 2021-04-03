import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Post {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'text' })
  contents: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
