"use client";
import { useAppSelector } from "@/app/store/hooks";
import Post from "../post/post";
import CommentModal from "../comment/comment-modal";
export default function Feeder() {
  const isCommentModalShown = useAppSelector(
    (state) => state.feed.currentPostAction.toShowCommentModal
  );
  return (
    <>
      <Post />
      {isCommentModalShown && <CommentModal />}
    </>
  );
}
