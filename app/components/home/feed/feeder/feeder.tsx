"use client";
import { useAppSelector } from "@/app/store/hooks";

import CommentModal from "../commentmodal.tsx/comment-modal";
import { Suspense } from "react";
import FeedItemSkeleton from "@/app/components/skeletons/feed";
import Posts from "./posts";

export default function Feeder() {
  const isCommentModalShown = useAppSelector(
    (state) => state.feed.currentPostAction.toShowCommentModal
  );
  return (
    <>
      <Suspense fallback={<FeedItemSkeleton />}>
        <Posts />
      </Suspense>
      {isCommentModalShown && <CommentModal />}
    </>
  );
}
