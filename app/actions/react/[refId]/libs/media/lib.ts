import { LIMIT } from "@/app/api/config";

import prisma from "@/app/libs/prisma";
import { PostType, ReactionType } from "@/generated/prisma/enums";
import { State } from "../../../types";

export const reactMedia = async (
  userId: string,
  postType: PostType,
  postId: string,
  mediaId: string | undefined,
  reactionType: ReactionType,
  prevState: State
) => {
  if (postType === "oUserPost") {
    try {
      const isMediaReacted = await prisma.oUserPost.findUnique({
        where: {
          id: postId,
        },
        select: {
          medias: {
            where: {
              id: mediaId,
            },
            select: {
              reactions: {
                where: {
                  userId: userId,
                },
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      if (isMediaReacted?.medias[0].reactions[0].id) {
        await prisma.oUserPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  reactions: {
                    update: {
                      where: {
                        id: isMediaReacted.medias[0].reactions[0].id,
                      },
                      data: {
                        reactionType: reactionType,
                        user: {
                          connect: {
                            id: userId,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      } else {
        await prisma.oUserPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  reactions: {
                    create: {
                      reactionType: reactionType,
                      user: {
                        connect: {
                          id: userId,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.mediaReaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          mediaId: mediaId,
        },
      });

      const _gReactionsForThisPost = gReactions.map((rxn) => {
        return {
          reactionType: rxn.reactionType,
          count: rxn._count.reactionType,
        };
      });

      return {
        success: true,
        _gReactions: _gReactionsForThisPost,
        reactionType,
        message: "Success ",
      };
    } catch (error) {
      return {
        success: true,
        _gReactions: [],
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }
  if (postType === "oPagePost") {
    try {
      const isMediaReacted = await prisma.oPagePost.findUnique({
        where: {
          id: postId,
        },
        select: {
          medias: {
            where: {
              id: mediaId,
            },
            select: {
              reactions: {
                where: {
                  userId: userId,
                },
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      if (isMediaReacted?.medias[0].reactions[0].id) {
        await prisma.oPagePost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  reactions: {
                    update: {
                      where: {
                        id: isMediaReacted.medias[0].reactions[0].id,
                      },
                      data: {
                        reactionType: reactionType,
                        user: {
                          connect: {
                            id: userId,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      } else {
        await prisma.oPagePost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  reactions: {
                    create: {
                      reactionType: reactionType,
                      user: {
                        connect: {
                          id: userId,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.mediaReaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          mediaId: mediaId,
        },
      });

      const _gReactionsForThisPost = gReactions.map((rxn) => {
        return {
          reactionType: rxn.reactionType,
          count: rxn._count.reactionType,
        };
      });

      return {
        success: true,
        _gReactions: _gReactionsForThisPost,
        reactionType,
        message: "Success ",
      };
    } catch (error) {
      return {
        success: true,
        _gReactions: [],
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }
  if (postType === "oGroupPost") {
    try {
      const isMediaReacted = await prisma.oGroupPost.findUnique({
        where: {
          id: postId,
        },
        select: {
          medias: {
            where: {
              id: mediaId,
            },
            select: {
              reactions: {
                where: {
                  userId: userId,
                },
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      if (isMediaReacted?.medias[0].reactions[0].id) {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  reactions: {
                    update: {
                      where: {
                        id: isMediaReacted.medias[0].reactions[0].id,
                      },
                      data: {
                        reactionType: reactionType,
                        user: {
                          connect: {
                            id: userId,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      } else {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  reactions: {
                    create: {
                      reactionType: reactionType,
                      user: {
                        connect: {
                          id: userId,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.mediaReaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          mediaId: mediaId,
        },
      });

      const _gReactionsForThisPost = gReactions.map((rxn) => {
        return {
          reactionType: rxn.reactionType,
          count: rxn._count.reactionType,
        };
      });

      return {
        success: true,
        _gReactions: _gReactionsForThisPost,
        reactionType,
        message: "Success ",
      };
    } catch (error) {
      return {
        success: true,
        _gReactions: [],
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }
};

export const reactMediaComment = async (
  userId: string,
  postType: PostType,
  postId: string,
  mediaId: string | undefined,
  commentId: string | undefined,
  reactionType: ReactionType,
  prevState: State
) => {
  if (postType === "oUserPost") {
    try {
      const isMediaCommentReacted = await prisma.oUserPost.findUnique({
        where: {
          id: postId,
        },
        select: {
          medias: {
            where: {
              id: mediaId,
            },
            select: {
              comments: {
                where: {
                  id: commentId,
                },

                select: {
                  reactions: {
                    where: {
                      userId: userId,
                    },
                    select: {
                      id: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (isMediaCommentReacted?.medias[0].comments[0].reactions[0].id) {
        await prisma.oUserPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        reactions: {
                          update: {
                            where: {
                              id: isMediaCommentReacted.medias[0].comments[0]
                                .reactions[0].id,
                            },
                            data: {
                              reactionType: reactionType,
                              user: {
                                connect: {
                                  id: userId,
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      } else {
        await prisma.oUserPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        reactions: {
                          create: {
                            reactionType: reactionType,
                            user: {
                              connect: {
                                id: userId,
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.mediaCommentReaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          commentId,
        },
      });

      const _gReactions = gReactions.map((rxn) => {
        return {
          reactionType: rxn.reactionType,
          count: rxn._count.reactionType,
        };
      });

      return {
        success: true,
        _gReactions: _gReactions,
        message: "Success ",
        reactionType,
      };
    } catch (error) {
      return {
        success: true,
        _gReactions: [],
        message: "Failed ",
        reactionType: undefined,
      };
    }
  }
  if (postType === "oPagePost") {
    try {
      const isMediaCommentReacted = await prisma.oPagePost.findUnique({
        where: {
          id: postId,
        },
        select: {
          medias: {
            where: {
              id: mediaId,
            },
            select: {
              comments: {
                where: {
                  id: commentId,
                },

                select: {
                  reactions: {
                    where: {
                      userId: userId,
                    },
                    select: {
                      id: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (isMediaCommentReacted?.medias[0].comments[0].reactions[0].id) {
        await prisma.oPagePost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        reactions: {
                          update: {
                            where: {
                              id: isMediaCommentReacted.medias[0].comments[0]
                                .reactions[0].id,
                            },
                            data: {
                              reactionType: reactionType,
                              user: {
                                connect: {
                                  id: userId,
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      } else {
        await prisma.oPagePost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        reactions: {
                          create: {
                            reactionType: reactionType,
                            user: {
                              connect: {
                                id: userId,
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.mediaCommentReaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          commentId,
        },
      });

      const _gReactions = gReactions.map((rxn) => {
        return {
          reactionType: rxn.reactionType,
          count: rxn._count.reactionType,
        };
      });

      return {
        success: true,
        _gReactions: _gReactions,
        message: "Success ",
        reactionType,
      };
    } catch (error) {
      return {
        success: true,
        _gReactions: [],
        message: "Failed ",
        reactionType: undefined,
      };
    }
  }
  if (postType === "oGroupPost") {
    try {
      const isMediaCommentReacted = await prisma.oGroupPost.findUnique({
        where: {
          id: postId,
        },
        select: {
          medias: {
            where: {
              id: mediaId,
            },
            select: {
              comments: {
                where: {
                  id: commentId,
                },

                select: {
                  reactions: {
                    where: {
                      userId: userId,
                    },
                    select: {
                      id: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (isMediaCommentReacted?.medias[0].comments[0].reactions[0].id) {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        reactions: {
                          update: {
                            where: {
                              id: isMediaCommentReacted.medias[0].comments[0]
                                .reactions[0].id,
                            },
                            data: {
                              reactionType: reactionType,
                              user: {
                                connect: {
                                  id: userId,
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      } else {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        reactions: {
                          create: {
                            reactionType: reactionType,
                            user: {
                              connect: {
                                id: userId,
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.mediaCommentReaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          commentId,
        },
      });

      const _gReactions = gReactions.map((rxn) => {
        return {
          reactionType: rxn.reactionType,
          count: rxn._count.reactionType,
        };
      });

      return {
        success: true,
        _gReactions: _gReactions,
        message: "Success ",
        reactionType,
      };
    } catch (error) {
      return {
        success: true,
        _gReactions: [],
        message: "Failed ",
        reactionType: undefined,
      };
    }
  }
};

export const reactMediaReply = async (
  userId: string,
  postType: PostType,
  postId: string,
  mediaId: string | undefined,
  commentId: string | undefined,
  replyId: string | undefined,
  reactionType: ReactionType,
  prevState: State
) => {
  if (postType === "oUserPost") {
    try {
      const isReplyMediaReacted = await prisma.oUserPost.findUnique({
        where: {
          id: postId,
        },
        select: {
          medias: {
            where: {
              id: mediaId,
            },
            select: {
              comments: {
                where: {
                  id: commentId,
                },
                select: {
                  replies: {
                    where: {
                      id: replyId,
                    },
                    select: {
                      reactions: {
                        where: {
                          userId: userId,
                        },
                        select: {
                          id: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (
        isReplyMediaReacted?.medias[0].comments[0].replies[0].reactions[0].id
      ) {
        await prisma.oUserPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        replies: {
                          update: {
                            where: {
                              id: replyId,
                            },
                            data: {
                              reactions: {
                                update: {
                                  where: {
                                    id: isReplyMediaReacted.medias[0]
                                      .comments[0].replies[0].reactions[0].id,
                                  },
                                  data: {
                                    reactionType: reactionType,
                                    user: {
                                      connect: {
                                        id: userId,
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          select: {
            medias: {
              where: {
                id: mediaId,
              },
              select: {
                comments: {
                  where: {
                    id: commentId,
                  },
                  select: {
                    replies: {
                      where: {
                        id: replyId,
                      },
                      select: {
                        id: true,
                        reactions: {
                          where: {
                            id: isReplyMediaReacted.medias[0].comments[0]
                              .replies[0].reactions[0].id,
                          },
                          select: {
                            reactionType: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      } else {
        await prisma.oUserPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        replies: {
                          update: {
                            where: {
                              id: replyId,
                            },
                            data: {
                              reactions: {
                                create: {
                                  reactionType: reactionType,
                                  user: {
                                    connect: {
                                      id: userId,
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.mediaReplyReactions.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          replyId: replyId,
        },
      });

      const _gReactions = gReactions.map((rxn) => {
        return {
          reactionType: rxn.reactionType,
          count: rxn._count.reactionType,
        };
      });

      return {
        success: true,
        _gReactions: _gReactions,
        reactionType,
        message: "Success ",
      };
    } catch (error) {
      return {
        success: true,
        _gReactions: [],
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }
  if (postType === "oPagePost") {
    try {
      const isReplyMediaReacted = await prisma.oPagePost.findUnique({
        where: {
          id: postId,
        },
        select: {
          medias: {
            where: {
              id: mediaId,
            },
            select: {
              comments: {
                where: {
                  id: commentId,
                },
                select: {
                  replies: {
                    where: {
                      id: replyId,
                    },
                    select: {
                      reactions: {
                        where: {
                          userId: userId,
                        },
                        select: {
                          id: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (
        isReplyMediaReacted?.medias[0].comments[0].replies[0].reactions[0].id
      ) {
        await prisma.oPagePost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        replies: {
                          update: {
                            where: {
                              id: replyId,
                            },
                            data: {
                              reactions: {
                                update: {
                                  where: {
                                    id: isReplyMediaReacted.medias[0]
                                      .comments[0].replies[0].reactions[0].id,
                                  },
                                  data: {
                                    reactionType: reactionType,
                                    user: {
                                      connect: {
                                        id: userId,
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          select: {
            medias: {
              where: {
                id: mediaId,
              },
              select: {
                comments: {
                  where: {
                    id: commentId,
                  },
                  select: {
                    replies: {
                      where: {
                        id: replyId,
                      },
                      select: {
                        id: true,
                        reactions: {
                          where: {
                            id: isReplyMediaReacted.medias[0].comments[0]
                              .replies[0].reactions[0].id,
                          },
                          select: {
                            reactionType: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      } else {
        await prisma.oPagePost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        replies: {
                          update: {
                            where: {
                              id: replyId,
                            },
                            data: {
                              reactions: {
                                create: {
                                  reactionType: reactionType,
                                  user: {
                                    connect: {
                                      id: userId,
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.mediaReplyReactions.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          replyId: replyId,
        },
      });

      const _gReactions = gReactions.map((rxn) => {
        return {
          reactionType: rxn.reactionType,
          count: rxn._count.reactionType,
        };
      });

      return {
        success: true,
        _gReactions: _gReactions,
        reactionType,
        message: "Success ",
      };
    } catch (error) {
      return {
        success: true,
        _gReactions: [],
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }

  if (postType === "oGroupPost") {
    try {
      const isReplyMediaReacted = await prisma.oGroupPost.findUnique({
        where: {
          id: postId,
        },
        select: {
          medias: {
            where: {
              id: mediaId,
            },
            select: {
              comments: {
                where: {
                  id: commentId,
                },
                select: {
                  replies: {
                    where: {
                      id: replyId,
                    },
                    select: {
                      reactions: {
                        where: {
                          userId: userId,
                        },
                        select: {
                          id: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (
        isReplyMediaReacted?.medias[0].comments[0].replies[0].reactions[0].id
      ) {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        replies: {
                          update: {
                            where: {
                              id: replyId,
                            },
                            data: {
                              reactions: {
                                update: {
                                  where: {
                                    id: isReplyMediaReacted.medias[0]
                                      .comments[0].replies[0].reactions[0].id,
                                  },
                                  data: {
                                    reactionType: reactionType,
                                    user: {
                                      connect: {
                                        id: userId,
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          select: {
            medias: {
              where: {
                id: mediaId,
              },
              select: {
                comments: {
                  where: {
                    id: commentId,
                  },
                  select: {
                    replies: {
                      where: {
                        id: replyId,
                      },
                      select: {
                        id: true,
                        reactions: {
                          where: {
                            id: isReplyMediaReacted.medias[0].comments[0]
                              .replies[0].reactions[0].id,
                          },
                          select: {
                            reactionType: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      } else {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        replies: {
                          update: {
                            where: {
                              id: replyId,
                            },
                            data: {
                              reactions: {
                                create: {
                                  reactionType: reactionType,
                                  user: {
                                    connect: {
                                      id: userId,
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.mediaReplyReactions.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          replyId: replyId,
        },
      });

      const _gReactions = gReactions.map((rxn) => {
        return {
          reactionType: rxn.reactionType,
          count: rxn._count.reactionType,
        };
      });

      return {
        success: true,
        _gReactions: _gReactions,
        reactionType,
        message: "Success ",
      };
    } catch (error) {
      return {
        success: true,
        _gReactions: [],
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }
};

export const reactMediaReplyReply = async (
  userId: string,
  postType: PostType,
  postId: string,
  mediaId: string | undefined,
  commentId: string | undefined,
  replyId: string | undefined,
  replyReplyId: string | undefined,
  reactionType: ReactionType,
  prevState: State
) => {
  if (postType === "oUserPost") {
    try {
      const isMediaReplyReplyReacted = await prisma.oUserPost.findUnique({
        where: {
          id: postId,
        },
        select: {
          medias: {
            where: {
              id: mediaId,
            },
            select: {
              comments: {
                where: {
                  id: commentId,
                },
                select: {
                  replies: {
                    where: {
                      id: replyId,
                    },
                    select: {
                      replies: {
                        where: {
                          id: replyReplyId,
                        },
                        select: {
                          reactions: {
                            where: {
                              userId: userId,
                            },
                            select: {
                              id: true,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (isMediaReplyReplyReacted) {
        await prisma.oUserPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        replies: {
                          update: {
                            where: {
                              id: replyId,
                            },
                            data: {
                              replies: {
                                update: {
                                  where: {
                                    id: replyReplyId,
                                  },
                                  data: {
                                    reactions: {
                                      update: {
                                        where: {
                                          id: isMediaReplyReplyReacted.medias[0]
                                            .comments[0].replies[0].replies[0]
                                            .reactions[0].id,
                                        },
                                        data: {
                                          reactionType: reactionType,
                                          user: {
                                            connect: {
                                              id: userId,
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      } else {
        await prisma.oUserPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        replies: {
                          update: {
                            where: {
                              id: replyId,
                            },
                            data: {
                              replies: {
                                update: {
                                  where: {
                                    id: replyReplyId,
                                  },
                                  data: {
                                    reactions: {
                                      create: {
                                        reactionType: reactionType,
                                        user: {
                                          connect: {
                                            id: userId,
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.mediaReplyReplyReactions.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          replyReplyId: replyReplyId,
        },
      });
      const _gReactions = gReactions.map((rxn) => {
        return {
          reactionType: rxn.reactionType,
          count: rxn._count.reactionType,
        };
      });
      return {
        success: true,
        _gReactions: _gReactions,
        reactionType,
        message: "Success ",
      };
    } catch (error) {
      return {
        success: true,
        _gReactions: [],
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }
  if (postType === "oPagePost") {
    try {
      const isMediaReplyReplyReacted = await prisma.oPagePost.findUnique({
        where: {
          id: postId,
        },
        select: {
          medias: {
            where: {
              id: mediaId,
            },
            select: {
              comments: {
                where: {
                  id: commentId,
                },
                select: {
                  replies: {
                    where: {
                      id: replyId,
                    },
                    select: {
                      replies: {
                        where: {
                          id: replyReplyId,
                        },
                        select: {
                          reactions: {
                            where: {
                              userId: userId,
                            },
                            select: {
                              id: true,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (isMediaReplyReplyReacted) {
        await prisma.oPagePost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        replies: {
                          update: {
                            where: {
                              id: replyId,
                            },
                            data: {
                              replies: {
                                update: {
                                  where: {
                                    id: replyReplyId,
                                  },
                                  data: {
                                    reactions: {
                                      update: {
                                        where: {
                                          id: isMediaReplyReplyReacted.medias[0]
                                            .comments[0].replies[0].replies[0]
                                            .reactions[0].id,
                                        },
                                        data: {
                                          reactionType: reactionType,
                                          user: {
                                            connect: {
                                              id: userId,
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      } else {
        await prisma.oPagePost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        replies: {
                          update: {
                            where: {
                              id: replyId,
                            },
                            data: {
                              replies: {
                                update: {
                                  where: {
                                    id: replyReplyId,
                                  },
                                  data: {
                                    reactions: {
                                      create: {
                                        reactionType: reactionType,
                                        user: {
                                          connect: {
                                            id: userId,
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.mediaReplyReplyReactions.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          replyReplyId: replyReplyId,
        },
      });
      const _gReactions = gReactions.map((rxn) => {
        return {
          reactionType: rxn.reactionType,
          count: rxn._count.reactionType,
        };
      });
      return {
        success: true,
        _gReactions: _gReactions,
        reactionType,
        message: "Success ",
      };
    } catch (error) {
      return {
        success: true,
        _gReactions: [],
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }
  if (postType === "oGroupPost") {
    try {
      const isMediaReplyReplyReacted = await prisma.oGroupPost.findUnique({
        where: {
          id: postId,
        },
        select: {
          medias: {
            where: {
              id: mediaId,
            },
            select: {
              comments: {
                where: {
                  id: commentId,
                },
                select: {
                  replies: {
                    where: {
                      id: replyId,
                    },
                    select: {
                      replies: {
                        where: {
                          id: replyReplyId,
                        },
                        select: {
                          reactions: {
                            where: {
                              userId: userId,
                            },
                            select: {
                              id: true,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (isMediaReplyReplyReacted) {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        replies: {
                          update: {
                            where: {
                              id: replyId,
                            },
                            data: {
                              replies: {
                                update: {
                                  where: {
                                    id: replyReplyId,
                                  },
                                  data: {
                                    reactions: {
                                      update: {
                                        where: {
                                          id: isMediaReplyReplyReacted.medias[0]
                                            .comments[0].replies[0].replies[0]
                                            .reactions[0].id,
                                        },
                                        data: {
                                          reactionType: reactionType,
                                          user: {
                                            connect: {
                                              id: userId,
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      } else {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
          },
          data: {
            medias: {
              update: {
                where: {
                  id: mediaId,
                },
                data: {
                  comments: {
                    update: {
                      where: {
                        id: commentId,
                      },
                      data: {
                        replies: {
                          update: {
                            where: {
                              id: replyId,
                            },
                            data: {
                              replies: {
                                update: {
                                  where: {
                                    id: replyReplyId,
                                  },
                                  data: {
                                    reactions: {
                                      create: {
                                        reactionType: reactionType,
                                        user: {
                                          connect: {
                                            id: userId,
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.mediaReplyReplyReactions.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          replyReplyId: replyReplyId,
        },
      });
      const _gReactions = gReactions.map((rxn) => {
        return {
          reactionType: rxn.reactionType,
          count: rxn._count.reactionType,
        };
      });
      return {
        success: true,
        _gReactions: _gReactions,
        reactionType,
        message: "Success ",
      };
    } catch (error) {
      return {
        success: true,
        _gReactions: [],
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }
};
