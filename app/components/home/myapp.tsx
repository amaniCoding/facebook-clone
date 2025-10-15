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

  const netWorkError = useAppSelector((state) => state.feed.netWorkError);

  useEffect(() => {
    if (isPostBoxOpened || isCommentBoxOpened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isCommentBoxOpened, isPostBoxOpened]);
  return (
    <>
      {netWorkError ? (
        <div className="fixed bottom-3 left-3 px-3 py-2 bg-slate-800 rounded-lg text-center text-white">
          {netWorkError}
        </div>
      ) : null}
      {children}
    </>
  );
}
