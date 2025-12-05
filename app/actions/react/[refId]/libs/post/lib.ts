import prisma from "@/app/libs/prisma";
import { PostType, ReactionType } from "@/generated/prisma/enums";
import { State } from "../../../types";

export const reactPost = async (
  userId: string,
  postType: PostType,
  postId: string,
  reactionType: ReactionType,

  prevState: State
) => {
  if (postType === "oUserPost") {
    try {
      const isReacted = await prisma.oUserPost.findUnique({
        where: {
          id: postId,
        },
        select: {
          reactions: {
            where: {
              userId: userId,
            },
            select: {
              id: true,
              reactionType: true,
            },
          },
        },
      });

      if (isReacted?.reactions[0].id) {
        await prisma.oUserPost.update({
          where: {
            id: postId,
          },
          data: {
            reactions: {
              update: {
                where: {
                  id: isReacted.reactions[0].id,
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
        });
      } else {
        await prisma.oUserPost.update({
          where: {
            id: postId,
          },
          data: {
            reactions: {
              create: {
                reactionType: reactionType!,
                user: {
                  connect: {
                    id: userId,
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.reaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          userPostId: postId,
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
    } catch {
      return {
        success: false,
        _gReactions: undefined,
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }

  if (postType === "userSharePost") {
    try {
      const isReacted = await prisma.userSharePost.findUnique({
        where: {
          id: postId,
        },
        select: {
          reactions: {
            where: {
              userId: userId,
            },
            select: {
              id: true,
              reactionType: true,
            },
          },
        },
      });

      if (isReacted?.reactions[0].id) {
        await prisma.userSharePost.update({
          where: {
            id: postId,
          },
          data: {
            reactions: {
              update: {
                where: {
                  id: isReacted.reactions[0].id,
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
        });
      } else {
        await prisma.userSharePost.update({
          where: {
            id: postId,
          },
          data: {
            reactions: {
              create: {
                reactionType: reactionType!,
                user: {
                  connect: {
                    id: userId,
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.reaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          userPostId: postId,
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
    } catch {
      return {
        success: false,
        _gReactions: undefined,
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }

  if (postType === "oPagePost") {
    try {
      const isReacted = await prisma.oPagePost.findUnique({
        where: {
          id: postId,
        },
        select: {
          reactions: {
            where: {
              userId: userId,
            },
            select: {
              id: true,
              reactionType: true,
            },
          },
        },
      });

      if (isReacted?.reactions[0].id) {
        await prisma.oPagePost.update({
          where: {
            id: postId,
          },
          data: {
            reactions: {
              update: {
                where: {
                  id: isReacted.reactions[0].id,
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
        });
      } else {
        await prisma.oPagePost.update({
          where: {
            id: postId,
          },
          data: {
            reactions: {
              create: {
                reactionType: reactionType!,
                user: {
                  connect: {
                    id: userId,
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.reaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          userPostId: postId,
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
    } catch {
      return {
        success: false,
        _gReactions: undefined,
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }

  if (postType === "pageSharePost") {
    try {
      const isReacted = await prisma.pageSharePost.findUnique({
        where: {
          id: postId,
        },
        select: {
          reactions: {
            where: {
              userId: userId,
            },
            select: {
              id: true,
              reactionType: true,
            },
          },
        },
      });

      if (isReacted?.reactions[0].id) {
        await prisma.pageSharePost.update({
          where: {
            id: postId,
          },
          data: {
            reactions: {
              update: {
                where: {
                  id: isReacted.reactions[0].id,
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
        });
      } else {
        await prisma.pageSharePost.update({
          where: {
            id: postId,
          },
          data: {
            reactions: {
              create: {
                reactionType: reactionType!,
                user: {
                  connect: {
                    id: userId,
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.reaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          userPostId: postId,
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
    } catch {
      return {
        success: false,
        _gReactions: undefined,
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }
  if (postType === "oGroupPost") {
    try {
      const isReacted = await prisma.oGroupPost.findUnique({
        where: {
          id: postId,
        },
        select: {
          reactions: {
            where: {
              userId: userId,
            },
            select: {
              id: true,
              reactionType: true,
            },
          },
        },
      });

      if (isReacted?.reactions[0].id) {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
          },
          data: {
            reactions: {
              update: {
                where: {
                  id: isReacted.reactions[0].id,
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
        });
      } else {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
          },
          data: {
            reactions: {
              create: {
                reactionType: reactionType!,
                user: {
                  connect: {
                    id: userId,
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.reaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          userPostId: postId,
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
    } catch {
      return {
        success: false,
        _gReactions: undefined,
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }

  if (postType === "toGroupSharedPost") {
    try {
      const isReacted = await prisma.toGroupSharePost.findUnique({
        where: {
          id: postId,
        },
        select: {
          reactions: {
            where: {
              userId: userId,
            },
            select: {
              id: true,
              reactionType: true,
            },
          },
        },
      });

      if (isReacted?.reactions[0].id) {
        await prisma.toGroupSharePost.update({
          where: {
            id: postId,
          },
          data: {
            reactions: {
              update: {
                where: {
                  id: isReacted.reactions[0].id,
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
        });
      } else {
        await prisma.toGroupSharePost.update({
          where: {
            id: postId,
          },
          data: {
            reactions: {
              create: {
                reactionType: reactionType!,
                user: {
                  connect: {
                    id: userId,
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.reaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          userPostId: postId,
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
    } catch {
      return {
        success: false,
        _gReactions: undefined,
        reactionType: undefined,
        message: "Failed ",
      };
    }
  }
};

export const reactComment = async (
  userId: string,
  postType: PostType,
  postId: string,
  commentId: string | undefined,
  reactionType: ReactionType,

  prevState: State
) => {
  if (postType === "oUserPost") {
    try {
      const isCommentReacted = await prisma.oUserPost.findUnique({
        where: {
          id: postId,
        },
        select: {
          comments: {
            where: {
              id: commentId,
            },
            select: {
              reactions: {
                where: {
                  userId,
                },
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      if (isCommentReacted) {
        await prisma.oUserPost.update({
          where: {
            id: postId,
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
                        id: isCommentReacted.comments[0].reactions[0].id,
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
        });
      }

      const gReactions = await prisma.commentReaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          commentId: commentId,
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

  if (postType === "userSharePost") {
    try {
      const isCommentReacted = await prisma.userSharePost.findUnique({
        where: {
          id: postId,
        },
        select: {
          comments: {
            where: {
              id: commentId,
            },
            select: {
              reactions: {
                where: {
                  userId,
                },
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      if (isCommentReacted) {
        await prisma.userSharePost.update({
          where: {
            id: postId,
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
                        id: isCommentReacted.comments[0].reactions[0].id,
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
        await prisma.userSharePost.update({
          where: {
            id: postId,
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
        });
      }

      const gReactions = await prisma.commentReaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          commentId: commentId,
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
      const isCommentReacted = await prisma.oPagePost.findUnique({
        where: {
          id: postId,
        },
        select: {
          comments: {
            where: {
              id: commentId,
            },
            select: {
              reactions: {
                where: {
                  userId,
                },
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      if (isCommentReacted) {
        await prisma.oPagePost.update({
          where: {
            id: postId,
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
                        id: isCommentReacted.comments[0].reactions[0].id,
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
        });
      }

      const gReactions = await prisma.commentReaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          commentId: commentId,
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

  if (postType === "pageSharePost") {
    try {
      const isCommentReacted = await prisma.pageSharePost.findUnique({
        where: {
          id: postId,
        },
        select: {
          comments: {
            where: {
              id: commentId,
            },
            select: {
              reactions: {
                where: {
                  userId,
                },
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      if (isCommentReacted) {
        await prisma.pageSharePost.update({
          where: {
            id: postId,
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
                        id: isCommentReacted.comments[0].reactions[0].id,
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
        await prisma.pageSharePost.update({
          where: {
            id: postId,
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
        });
      }

      const gReactions = await prisma.commentReaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          commentId: commentId,
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
      const isCommentReacted = await prisma.oGroupPost.findUnique({
        where: {
          id: postId,
        },
        select: {
          comments: {
            where: {
              id: commentId,
            },
            select: {
              reactions: {
                where: {
                  userId,
                },
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      if (isCommentReacted) {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
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
                        id: isCommentReacted.comments[0].reactions[0].id,
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
        });
      }

      const gReactions = await prisma.commentReaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          commentId: commentId,
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

  if (postType === "toGroupSharedPost") {
    try {
      const isCommentReacted = await prisma.toGroupSharePost.findUnique({
        where: {
          id: postId,
        },
        select: {
          comments: {
            where: {
              id: commentId,
            },
            select: {
              reactions: {
                where: {
                  userId,
                },
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      if (isCommentReacted) {
        await prisma.toGroupSharePost.update({
          where: {
            id: postId,
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
                        id: isCommentReacted.comments[0].reactions[0].id,
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
        await prisma.toGroupSharePost.update({
          where: {
            id: postId,
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
        });
      }

      const gReactions = await prisma.commentReaction.groupBy({
        by: ["reactionType"],
        _count: {
          reactionType: true,
        },
        where: {
          commentId: commentId,
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

export const reactReply = async (
  userId: string,

  postType: PostType,
  postId: string,
  commentId: string | undefined,
  replyId: string | undefined,
  reactionType: ReactionType,

  prevState: State
) => {
  if (postType === "oUserPost") {
    try {
      const isReplyReacted = await prisma.oUserPost.findUnique({
        where: {
          id: postId,
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
      if (isReplyReacted?.comments[0].replies[0].reactions[0].id) {
        await prisma.oUserPost.update({
          where: {
            id: postId,
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
                              id: isReplyReacted.comments[0].replies[0]
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
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.replyReaction.groupBy({
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

  if (postType === "userSharePost") {
    try {
      const isReplyReacted = await prisma.userSharePost.findUnique({
        where: {
          id: postId,
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
      if (isReplyReacted?.comments[0].replies[0].reactions[0].id) {
        await prisma.userSharePost.update({
          where: {
            id: postId,
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
                              id: isReplyReacted.comments[0].replies[0]
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
        await prisma.userSharePost.update({
          where: {
            id: postId,
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
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.replyReaction.groupBy({
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
      const isReplyReacted = await prisma.oPagePost.findUnique({
        where: {
          id: postId,
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
      if (isReplyReacted?.comments[0].replies[0].reactions[0].id) {
        await prisma.oPagePost.update({
          where: {
            id: postId,
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
                              id: isReplyReacted.comments[0].replies[0]
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
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.replyReaction.groupBy({
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

  if (postType === "pageSharePost") {
    try {
      const isReplyReacted = await prisma.pageSharePost.findUnique({
        where: {
          id: postId,
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
      if (isReplyReacted?.comments[0].replies[0].reactions[0].id) {
        await prisma.pageSharePost.update({
          where: {
            id: postId,
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
                              id: isReplyReacted.comments[0].replies[0]
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
        await prisma.pageSharePost.update({
          where: {
            id: postId,
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
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.replyReaction.groupBy({
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
      const isReplyReacted = await prisma.oGroupPost.findUnique({
        where: {
          id: postId,
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
      if (isReplyReacted?.comments[0].replies[0].reactions[0].id) {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
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
                              id: isReplyReacted.comments[0].replies[0]
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
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.replyReaction.groupBy({
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

  if (postType === "toGroupSharedPost") {
    try {
      const isReplyReacted = await prisma.toGroupSharePost.findUnique({
        where: {
          id: postId,
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
      if (isReplyReacted?.comments[0].replies[0].reactions[0].id) {
        await prisma.toGroupSharePost.update({
          where: {
            id: postId,
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
                              id: isReplyReacted.comments[0].replies[0]
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
        await prisma.toGroupSharePost.update({
          where: {
            id: postId,
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
                  },
                },
              },
            },
          },
        });
      }

      const gReactions = await prisma.replyReaction.groupBy({
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

export const reactReplyReply = async (
  userId: string,

  postType: PostType,
  postId: string,
  commentId: string | undefined,
  replyId: string | undefined,
  replyReplyId: string | undefined,
  reactionType: ReactionType,
  prevState: State
) => {
  if (postType === "oUserPost") {
    try {
      const isReplyReplyReacted = await prisma.oUserPost.findUnique({
        where: {
          id: postId,
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
      });

      if (isReplyReplyReacted) {
        await prisma.oUserPost.update({
          where: {
            id: postId,
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
                                    id: isReplyReplyReacted.comments[0]
                                      .replies[0].replies[0].reactions[0].id,
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
        });
      } else {
        await prisma.oUserPost.update({
          where: {
            id: postId,
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
        });
      }

      const gReactions = await prisma.replyReplyReactions.groupBy({
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
  if (postType === "userSharePost") {
    try {
      const isReplyReplyReacted = await prisma.userSharePost.findUnique({
        where: {
          id: postId,
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
      });

      if (isReplyReplyReacted) {
        await prisma.userSharePost.update({
          where: {
            id: postId,
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
                                    id: isReplyReplyReacted.comments[0]
                                      .replies[0].replies[0].reactions[0].id,
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
        });
      } else {
        await prisma.userSharePost.update({
          where: {
            id: postId,
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
        });
      }

      const gReactions = await prisma.replyReplyReactions.groupBy({
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
      const isReplyReplyReacted = await prisma.oPagePost.findUnique({
        where: {
          id: postId,
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
      });

      if (isReplyReplyReacted) {
        await prisma.oPagePost.update({
          where: {
            id: postId,
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
                                    id: isReplyReplyReacted.comments[0]
                                      .replies[0].replies[0].reactions[0].id,
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
        });
      } else {
        await prisma.oPagePost.update({
          where: {
            id: postId,
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
        });
      }

      const gReactions = await prisma.replyReplyReactions.groupBy({
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

  if (postType === "pageSharePost") {
    try {
      const isReplyReplyReacted = await prisma.pageSharePost.findUnique({
        where: {
          id: postId,
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
      });

      if (isReplyReplyReacted) {
        await prisma.pageSharePost.update({
          where: {
            id: postId,
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
                                    id: isReplyReplyReacted.comments[0]
                                      .replies[0].replies[0].reactions[0].id,
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
        });
      } else {
        await prisma.pageSharePost.update({
          where: {
            id: postId,
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
        });
      }

      const gReactions = await prisma.replyReplyReactions.groupBy({
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
      const isReplyReplyReacted = await prisma.oGroupPost.findUnique({
        where: {
          id: postId,
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
      });

      if (isReplyReplyReacted) {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
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
                                    id: isReplyReplyReacted.comments[0]
                                      .replies[0].replies[0].reactions[0].id,
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
        });
      } else {
        await prisma.oGroupPost.update({
          where: {
            id: postId,
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
        });
      }

      const gReactions = await prisma.replyReplyReactions.groupBy({
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
  if (postType === "toGroupSharedPost") {
    try {
      const isReplyReplyReacted = await prisma.toGroupSharePost.findUnique({
        where: {
          id: postId,
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
      });

      if (isReplyReplyReacted) {
        await prisma.toGroupSharePost.update({
          where: {
            id: postId,
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
                                    id: isReplyReplyReacted.comments[0]
                                      .replies[0].replies[0].reactions[0].id,
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
        });
      } else {
        await prisma.toGroupSharePost.update({
          where: {
            id: postId,
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
        });
      }

      const gReactions = await prisma.replyReplyReactions.groupBy({
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
