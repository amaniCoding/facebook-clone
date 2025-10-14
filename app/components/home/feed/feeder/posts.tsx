"use client";
import { useEffect, useState } from "react";
import Post from "../post/post";

import { string } from "zod";
import { PostsUser } from "../types";

export default function Posts() {
  const [posts_user, setPosts_user] = useState<PostsUser[]>();

  useEffect(() => {
    const getFeeds = async () => {
      const response = await fetch("/feeder");
      const data = await response.json();
      setPosts_user(data.posts_user);
    };
    getFeeds();
  }, []);
  return (
    <>
      {posts_user?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
