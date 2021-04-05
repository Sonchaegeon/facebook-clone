import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeletePostInput {
  @Field()
  @IsNotEmpty()
  id: number;
}
