import { Post } from 'src/post/entity/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum Gender {
  FEMAIL = 'F',
  MALE = 'M',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ length: 80 })
  lastname: string;

  @Column({ length: 80 })
  firstname: string;

  @Column({ type: 'smallint' })
  birth_year: number;

  @Column({ type: 'tinyint' })
  birth_month: number;

  @Column({ type: 'tinyint' })
  birth_day: number;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
