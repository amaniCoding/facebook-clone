"use client";
import { useAppSelector } from "@/app/store/hooks";
import { useEffect } from "react";

export default function MyApp({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isPostBoxOpened = useAppSelector(
    (state) => state.feed.addPost.toShowAddPostModal
  );
  const isCommentBoxOpened = useAppSelector(
    (state) => state.feed.currentPostAction.toShowCommentModal
  );
  useEffect(() => {
    if (isPostBoxOpened || isCommentBoxOpened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isCommentBoxOpened, isPostBoxOpened]);
  return <>{children}</>;
}
