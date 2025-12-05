"use client";
import {
  OGroupPost,
  OPagePost,
  OUserPost,
  PageSharePost,
  ToGroupSharedPost,
  UserSharePost,
} from "@/app/api/feeder/[page]/lib";
import ReactA from "../shared/reacta";

import { State } from "@/app/actions/react/types";
import { PostType } from "@/generated/prisma/client";
import { _react } from "@/app/actions/react/react";
export default function ReactionBox({
  post,
  keepShowing,
  hideShowing,
}: {
  post?: {
    type: PostType;
    post: unknown;
  };

  keepShowing: () => void;
  hideShowing: () => void;
}) {
  if (post!.type === "oUserPost") {
    const _post = post!.post as OUserPost;
    const x = _react("post", "itSelf");

    const z = x!.bind(
      null,
      "oUserPost",
      _post.postId!,
      undefined,
      undefined,
      undefined,
      undefined
    )! as unknown as Promise<State | undefined>;

    return (
      <>
        <div onMouseEnter={keepShowing} onMouseLeave={hideShowing}>
          <ReactA actionOn={z!} />
        </div>
      </>
    );
  }
  if (post!.type === "userSharePost") {
    const _post = post!.post as OUserPost;
    const x = _react("post", "itSelf");
    const z = x!.bind(
      null,
      "oUserPost",
      _post.postId!,
      undefined,
      undefined,
      undefined,
      undefined
    )! as unknown as Promise<State | undefined>;

    return (
      <>
        <div onMouseEnter={keepShowing} onMouseLeave={hideShowing}>
          <ReactA actionOn={z!} />
        </div>
      </>
    );
  }

  if (post!.type === "oPagePost") {
    const _post = post!.post as OUserPost;
    const x = _react("post", "itSelf");

    const z = x!.bind(
      null,
      "oUserPost",
      _post.postId!,
      undefined,
      undefined,
      undefined,
      undefined
    )! as unknown as Promise<State | undefined>;

    return (
      <>
        <div onMouseEnter={keepShowing} onMouseLeave={hideShowing}>
          <ReactA actionOn={z!} />
        </div>
      </>
    );
  }

  if (post!.type === "pageSharePost") {
    const _post = post!.post as OUserPost;
    const x = _react("post", "itSelf");

    const z = x!.bind(
      null,
      "oUserPost",
      _post.postId!,
      undefined,
      undefined,
      undefined,
      undefined
    )! as unknown as Promise<State | undefined>;

    return (
      <>
        <div onMouseEnter={keepShowing} onMouseLeave={hideShowing}>
          <ReactA actionOn={z!} />
        </div>
      </>
    );
  }

  if (post!.type === "oGroupPost") {
    const _post = post!.post as OUserPost;
    const x = _react("post", "itSelf");

    const z = x!.bind(
      null,
      "oUserPost",
      _post.postId!,
      undefined,
      undefined,
      undefined,
      undefined
    )! as unknown as Promise<State | undefined>;

    return (
      <>
        <div onMouseEnter={keepShowing} onMouseLeave={hideShowing}>
          <ReactA actionOn={z!} />
        </div>
      </>
    );
  }

  if (post!.type === "toGroupSharedPost") {
    const _post = post!.post as OUserPost;
    const x = _react("post", "itSelf");
    const z = x!.bind(
      null,
      "oUserPost",
      _post.postId!,
      undefined,
      undefined,
      undefined,
      undefined
    )! as unknown as Promise<State | undefined>;

    return (
      <>
        <div onMouseEnter={keepShowing} onMouseLeave={hideShowing}>
          <ReactA actionOn={z!} />
        </div>
      </>
    );
  }
  return null;
}
