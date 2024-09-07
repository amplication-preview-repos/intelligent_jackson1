import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type TweetWhereInput = {
  author?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  likeCount?: IntNullableFilter;
  likes?: LikeListRelationFilter;
  retweetCount?: IntNullableFilter;
};
