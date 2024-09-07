import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  followersCount?: IntNullableFilter;
  followingCount?: IntNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  profilePicture?: JsonFilter;
  username?: StringFilter;
};
