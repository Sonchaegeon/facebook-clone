import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@ArgsType()
export class GetPostsArgs {
  @Field(() => Int)
  @IsNumber()
  userId: number;
}
