-- CreateEnum
CREATE TYPE "ReactionType" AS ENUM ('like', 'love', 'sad', 'angry', 'care', 'haha', 'wow');

-- CreateTable
CREATE TABLE "UserPostComment" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PagePostComment" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PagePostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupPostComment" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupPostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSharePostComment" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSharePostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageSharePostComment" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageSharePostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSharePostToGroupComment" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSharePostToGroupComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageSharePostToGroupComment" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageSharePostToGroupComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepliesForUserPostComment" (
    "id" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RepliesForUserPostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepliesForPagePostComment" (
    "id" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RepliesForPagePostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepliesForGroupPostComment" (
    "id" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RepliesForGroupPostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepliesForUserSharePostComment" (
    "id" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RepliesForUserSharePostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepliesForPageSharePostComment" (
    "id" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RepliesForPageSharePostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepliesForUserSharePostToGroupComment" (
    "id" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RepliesForUserSharePostToGroupComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepliesForPageSharePostToGroupComment" (
    "id" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RepliesForPageSharePostToGroupComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForUserPostComment" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForUserPostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForPagePostComment" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForPagePostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForGroupPostComment" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForGroupPostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForUserSharePostComment" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForUserSharePostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForPageSharePostComment" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForPageSharePostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForUserSharePostToGroupComment" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForUserSharePostToGroupComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForPageSharePostToGroupComment" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForPageSharePostToGroupComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForUserPostCommentReply" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForUserPostCommentReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForPagePostCommentReply" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForPagePostCommentReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForGroupPostCommentReply" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForGroupPostCommentReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForUserSharePostCommentReply" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForUserSharePostCommentReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForPageSharePostCommentReply" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForPageSharePostCommentReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForUserSharePostToGroupCommentReply" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForUserSharePostToGroupCommentReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionsForPageSharePostToGroupCommentReply" (
    "id" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReactionsForPageSharePostToGroupCommentReply_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserPostComment" ADD CONSTRAINT "UserPostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostComment" ADD CONSTRAINT "UserPostComment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "UserPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagePostComment" ADD CONSTRAINT "PagePostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagePostComment" ADD CONSTRAINT "PagePostComment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PagePost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupPostComment" ADD CONSTRAINT "GroupPostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupPostComment" ADD CONSTRAINT "GroupPostComment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "GroupPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSharePostComment" ADD CONSTRAINT "UserSharePostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSharePostComment" ADD CONSTRAINT "UserSharePostComment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "UserSharePost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageSharePostComment" ADD CONSTRAINT "PageSharePostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageSharePostComment" ADD CONSTRAINT "PageSharePostComment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PageSharePost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSharePostToGroupComment" ADD CONSTRAINT "UserSharePostToGroupComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSharePostToGroupComment" ADD CONSTRAINT "UserSharePostToGroupComment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "UserShareToGroupPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageSharePostToGroupComment" ADD CONSTRAINT "PageSharePostToGroupComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageSharePostToGroupComment" ADD CONSTRAINT "PageSharePostToGroupComment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PageShareToGroupPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForUserPostComment" ADD CONSTRAINT "RepliesForUserPostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForUserPostComment" ADD CONSTRAINT "RepliesForUserPostComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "UserPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForPagePostComment" ADD CONSTRAINT "RepliesForPagePostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForPagePostComment" ADD CONSTRAINT "RepliesForPagePostComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "PagePostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForGroupPostComment" ADD CONSTRAINT "RepliesForGroupPostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForGroupPostComment" ADD CONSTRAINT "RepliesForGroupPostComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "GroupPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForUserSharePostComment" ADD CONSTRAINT "RepliesForUserSharePostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForUserSharePostComment" ADD CONSTRAINT "RepliesForUserSharePostComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "UserSharePostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForPageSharePostComment" ADD CONSTRAINT "RepliesForPageSharePostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForPageSharePostComment" ADD CONSTRAINT "RepliesForPageSharePostComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "PageSharePostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForUserSharePostToGroupComment" ADD CONSTRAINT "RepliesForUserSharePostToGroupComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForUserSharePostToGroupComment" ADD CONSTRAINT "RepliesForUserSharePostToGroupComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "UserSharePostToGroupComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForPageSharePostToGroupComment" ADD CONSTRAINT "RepliesForPageSharePostToGroupComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesForPageSharePostToGroupComment" ADD CONSTRAINT "RepliesForPageSharePostToGroupComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "PageSharePostToGroupComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForUserPostComment" ADD CONSTRAINT "ReactionsForUserPostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForUserPostComment" ADD CONSTRAINT "ReactionsForUserPostComment_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "UserPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForPagePostComment" ADD CONSTRAINT "ReactionsForPagePostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForPagePostComment" ADD CONSTRAINT "ReactionsForPagePostComment_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "PagePostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForGroupPostComment" ADD CONSTRAINT "ReactionsForGroupPostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForGroupPostComment" ADD CONSTRAINT "ReactionsForGroupPostComment_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "GroupPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForUserSharePostComment" ADD CONSTRAINT "ReactionsForUserSharePostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForUserSharePostComment" ADD CONSTRAINT "ReactionsForUserSharePostComment_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "UserSharePostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForPageSharePostComment" ADD CONSTRAINT "ReactionsForPageSharePostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForPageSharePostComment" ADD CONSTRAINT "ReactionsForPageSharePostComment_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "PageSharePostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForUserSharePostToGroupComment" ADD CONSTRAINT "ReactionsForUserSharePostToGroupComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForUserSharePostToGroupComment" ADD CONSTRAINT "ReactionsForUserSharePostToGroupComment_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "UserSharePostToGroupComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForPageSharePostToGroupComment" ADD CONSTRAINT "ReactionsForPageSharePostToGroupComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForPageSharePostToGroupComment" ADD CONSTRAINT "ReactionsForPageSharePostToGroupComment_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "PageSharePostToGroupComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForUserPostCommentReply" ADD CONSTRAINT "ReactionsForUserPostCommentReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForUserPostCommentReply" ADD CONSTRAINT "ReactionsForUserPostCommentReply_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "UserPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForPagePostCommentReply" ADD CONSTRAINT "ReactionsForPagePostCommentReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForPagePostCommentReply" ADD CONSTRAINT "ReactionsForPagePostCommentReply_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "PagePostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForGroupPostCommentReply" ADD CONSTRAINT "ReactionsForGroupPostCommentReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForGroupPostCommentReply" ADD CONSTRAINT "ReactionsForGroupPostCommentReply_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "GroupPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForUserSharePostCommentReply" ADD CONSTRAINT "ReactionsForUserSharePostCommentReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForUserSharePostCommentReply" ADD CONSTRAINT "ReactionsForUserSharePostCommentReply_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "UserSharePostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForPageSharePostCommentReply" ADD CONSTRAINT "ReactionsForPageSharePostCommentReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForPageSharePostCommentReply" ADD CONSTRAINT "ReactionsForPageSharePostCommentReply_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "PageSharePostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForUserSharePostToGroupCommentReply" ADD CONSTRAINT "ReactionsForUserSharePostToGroupCommentReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForUserSharePostToGroupCommentReply" ADD CONSTRAINT "ReactionsForUserSharePostToGroupCommentReply_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "UserSharePostToGroupComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForPageSharePostToGroupCommentReply" ADD CONSTRAINT "ReactionsForPageSharePostToGroupCommentReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionsForPageSharePostToGroupCommentReply" ADD CONSTRAINT "ReactionsForPageSharePostToGroupCommentReply_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "PageSharePostToGroupComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
