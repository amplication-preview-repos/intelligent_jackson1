/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

@InputType()
class TweetUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutTweetsInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutTweetsInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutTweetsInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutTweetsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  image?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  likeCount?: number | null;

  @ApiProperty({
    required: false,
    type: () => LikeUpdateManyWithoutTweetsInput,
  })
  @ValidateNested()
  @Type(() => LikeUpdateManyWithoutTweetsInput)
  @IsOptional()
  @Field(() => LikeUpdateManyWithoutTweetsInput, {
    nullable: true,
  })
  likes?: LikeUpdateManyWithoutTweetsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  retweetCount?: number | null;
}

export { TweetUpdateInput as TweetUpdateInput };
