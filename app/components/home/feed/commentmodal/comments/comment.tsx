import { CommentType } from "@/app/api/comments/[refId]/lib";

import Replies from "../replies/replies";

import Header from "./header";
import { ReactionType } from "@/generated/prisma/client";
import { RefObject } from "react";
export default function Comment({
  comment,
  gReactions,
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
  comment: CommentType;
  gReactions: {
    reactionType: ReactionType;
    count: number;
  }[];
}) {
  return (
    <div className="relative" ref={ref}>
      <div className="flex flex-col">
        <Header comment={comment} gReactions={gReactions} />
        <Replies
          commentId={comment!.id}
          repliesCount={comment!._count.replies}
        />
      </div>
    </div>
  );
}
