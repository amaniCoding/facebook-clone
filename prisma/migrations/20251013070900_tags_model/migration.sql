-- CreateTable
CREATE TABLE "UserPostReactions" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPostReactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PagePostReactions" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PagePostReactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupPostReactions" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupPostReactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSharePostReactions" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSharePostReactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageSharePostReactions" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageSharePostReactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageSharePostToGroupReactions" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageSharePostToGroupReactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSharePostToGroupReactions" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSharePostToGroupReactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserPostReactions" ADD CONSTRAINT "UserPostReactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostReactions" ADD CONSTRAINT "UserPostReactions_postId_fkey" FOREIGN KEY ("postId") REFERENCES "UserPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagePostReactions" ADD CONSTRAINT "PagePostReactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagePostReactions" ADD CONSTRAINT "PagePostReactions_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PagePost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupPostReactions" ADD CONSTRAINT "GroupPostReactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupPostReactions" ADD CONSTRAINT "GroupPostReactions_postId_fkey" FOREIGN KEY ("postId") REFERENCES "GroupPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSharePostReactions" ADD CONSTRAINT "UserSharePostReactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSharePostReactions" ADD CONSTRAINT "UserSharePostReactions_postId_fkey" FOREIGN KEY ("postId") REFERENCES "UserSharePost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageSharePostReactions" ADD CONSTRAINT "PageSharePostReactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageSharePostReactions" ADD CONSTRAINT "PageSharePostReactions_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PageSharePost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageSharePostToGroupReactions" ADD CONSTRAINT "PageSharePostToGroupReactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageSharePostToGroupReactions" ADD CONSTRAINT "PageSharePostToGroupReactions_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PageShareToGroupPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSharePostToGroupReactions" ADD CONSTRAINT "UserSharePostToGroupReactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSharePostToGroupReactions" ADD CONSTRAINT "UserSharePostToGroupReactions_postId_fkey" FOREIGN KEY ("postId") REFERENCES "UserShareToGroupPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;
