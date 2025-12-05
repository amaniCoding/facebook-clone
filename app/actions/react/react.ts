"use server";

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

export function _react(
  refFrom: "post" | "media",
  type: "itSelf" | "comment" | "reply" | "replyReply"
) {
  if (refFrom === "post") {
    if (type === "itSelf") {
      return reactPost;
    }

    if (type === "comment") {
      return reactComment;
    }

    if (type === "reply") {
      return reactReply;
    }

    if (type === "replyReply") {
      return reactReplyReply;
    }
  }

  if (refFrom === "media") {
    if (type === "itSelf") {
      return reactMedia;
    }

    if (type === "comment") {
      return reactMediaComment;
    }

    if (type === "reply") {
      return reactMediaReply;
    }

    if (type === "replyReply") {
      return reactMediaReplyReply;
    }
  }
}
