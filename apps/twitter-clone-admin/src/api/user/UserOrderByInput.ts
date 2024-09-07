import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  followersCount?: SortOrder;
  followingCount?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  profilePicture?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
