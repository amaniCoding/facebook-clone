import { PostType, ReactionType } from "@/generated/prisma/client";
import { State } from "../types";
import { auth } from "@/app/auth";
import {
  reactMedia,
  reactMediaComment,
  reactMediaReply,
  reactMediaReplyReply,
} from "./libs/media/lib";
import {
  reactPost,
  reactComment,
  reactReply,
  reactReplyReply,
} from "./libs/post/lib";

export async function _react(
  refFrom: "post" | "media",
  type: "itSelf" | "comment" | "reply" | "replyReply",
  postType: PostType,
  postId: string,
  mediaId: string | undefined,
  commentId: string | undefined,
  replyId: string | undefined,
  replyReplyId: string | undefined,
  reactionType: ReactionType,
  prevState: State
) {
  try {
    const session = await auth();
    if (!session?.user) {
      throw new Error("Un aauthorized request");
    }
    if (refFrom === "post") {
      if (type === "itSelf") {
        return reactPost(
          session.user.id,
          postType,
          postId,
          reactionType,
          prevState
        );
      }

      if (type === "comment") {
        await reactComment(
          session.user.id,

          postType,
          postId,
          commentId,
          reactionType,
          prevState
        );
        return;
      }

      if (type === "reply") {
        await reactReply(
          session.user.id,

          postType,
          postId,
          commentId,
          replyId,
          reactionType,
          prevState
        );
        return;
      }

      if (type === "replyReply") {
        await reactReplyReply(
          session.user.id,

          postType,
          postId,
          commentId,
          replyId,
          replyReplyId,
          reactionType,
          prevState
        );
        return;
      }
      return;
    }

    if (refFrom === "media") {
      if (type === "itSelf") {
        await reactMedia(
          session.user.id,

          postType,
          postId,
          mediaId,

          reactionType,
          prevState
        );
        return;
      }

      if (type === "comment") {
        await reactMediaComment(
          session.user.id,

          postType,
          postId,
          mediaId,
          commentId,
          reactionType,
          prevState
        );
        return;
      }

      if (type === "reply") {
        await reactMediaReply(
          session.user.id,

          postType,
          postId,
          mediaId,
          commentId,
          replyId,
          reactionType,
          prevState
        );
        return;
      }

      if (type === "replyReply") {
        await reactMediaReplyReply(
          session.user.id,

          postType,
          postId,
          mediaId,
          commentId,
          replyId,
          replyReplyId,
          reactionType,
          prevState
        );
        return;
      }
      return;
    }
  } catch {}
}
