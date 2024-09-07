import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  author?: string | null;
  comments?: CommentUpdateManyWithoutTweetsInput;
  content?: string | null;
  image?: InputJsonValue;
  likeCount?: number | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  retweetCount?: number | null;
};
