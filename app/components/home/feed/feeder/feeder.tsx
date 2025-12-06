"use client";
import { useEffect, useRef } from "react";
import Post from "../post/post";
import CommentModal from "../commentmodal/comment-modal";
import { useAppSelector } from "@/app/store/hooks";

import ReactionModal from "../reactionmodal/reactionmodal";
import useSWRInfinite from "swr/infinite";
import { FeedsType } from "@/app/api/feeder/[page]/lib";
import FeedItemSkeleton from "@/app/components/skeletons/feed";
interface FeedsPage {
  feeds: FeedsType[];
}
export default function Feeder() {
  const isCommentModalOpen = useAppSelector(
    (state) => state.commentModal.isOpen
  );

  const isReactionModalOpen = useAppSelector(
    (state) => state.reactionModal.isOpen
  );

  const fetcher = async (url: string): Promise<FeedsPage> => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("An error occurred while fetching the data.");
    }
    return res.json();
  };
  const PAGE_SIZE = 10;

  const getKey = (pageIndex: number, previousPageData: FeedsPage | null) => {
    if (previousPageData && previousPageData.feeds.length === 0) return null;

    return `/api/feeder/${pageIndex + 1}/`;
  };

  const { data, error, size, setSize, isLoading, isValidating } =
    useSWRInfinite<FeedsPage>(getKey, fetcher);

  // const feeds: FeedsType[] = useMemo(() => {
  //   return data ? data.flatMap((page) => page.feeds) : [];
  // }, [data]);

  const feeds = data ? data.flatMap((page) => page.feeds) : [];

  const observerRef = useRef<HTMLDivElement>(null);

  const isLoadingMore =
    isLoading ||
    (isValidating && data && typeof data[size - 1] === "undefined");
  const isReachingEnd = data && data[data.length - 1]?.feeds.length < PAGE_SIZE;

  useEffect(() => {
    if (isReachingEnd || !observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !isLoadingMore) {
          setSize(size + 1);
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [size, setSize, isReachingEnd, isLoadingMore]);

  if (error) return <div>Failed to load posts</div>;
  if (isLoading) return <FeedItemSkeleton />;
  return (
    <>
      {feeds!.map((post, index) => (
        <Post key={index} post={post} />
      ))}

      {isCommentModalOpen && <CommentModal />}
      {isReactionModalOpen && <ReactionModal />}
    </>
  );
}
