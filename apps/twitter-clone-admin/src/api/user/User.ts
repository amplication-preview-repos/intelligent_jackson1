import { Like } from "../like/Like";
import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  followersCount: number | null;
  followingCount: number | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  profilePicture: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
