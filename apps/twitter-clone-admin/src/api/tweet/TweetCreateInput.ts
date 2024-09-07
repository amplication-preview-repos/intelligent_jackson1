import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";
import { InputJsonValue } from "../../types";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutTweetsInput;
  content?: string | null;
  image?: InputJsonValue;
  likeCount?: number | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  retweetCount?: number | null;
};
