import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  followersCount?: number | null;
  followingCount?: number | null;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
};
