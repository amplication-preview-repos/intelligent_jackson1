import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { Like } from "../like/Like";

export type Tweet = {
  author: string | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  likeCount: number | null;
  likes?: Array<Like>;
  retweetCount: number | null;
  updatedAt: Date;
};
