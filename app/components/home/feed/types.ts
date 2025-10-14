import { Medias_USER, Post_USER, User } from "@/generated/prisma";

export interface PostsUser extends Post_USER {
  medias: Medias_USER[];
  user: User;
}
