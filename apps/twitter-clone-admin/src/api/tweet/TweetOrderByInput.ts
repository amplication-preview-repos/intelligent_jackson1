import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  likeCount?: SortOrder;
  retweetCount?: SortOrder;
  updatedAt?: SortOrder;
};
