/*
  Warnings:

  - The values [friendList] on the enum `SuperAudinece` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SuperAudinece_new" AS ENUM ('friendsExcept', 'specificFriends', 'customList');
ALTER TABLE "UserPost" ALTER COLUMN "sAudience" TYPE "SuperAudinece_new" USING ("sAudience"::text::"SuperAudinece_new");
ALTER TABLE "GroupPost" ALTER COLUMN "sAudience" TYPE "SuperAudinece_new" USING ("sAudience"::text::"SuperAudinece_new");
ALTER TABLE "UserSharePost" ALTER COLUMN "cAudience" TYPE "SuperAudinece_new" USING ("cAudience"::text::"SuperAudinece_new");
ALTER TABLE "PageSharePost" ALTER COLUMN "cAudience" TYPE "SuperAudinece_new" USING ("cAudience"::text::"SuperAudinece_new");
ALTER TABLE "PageShareToGroupPost" ALTER COLUMN "cAudience" TYPE "SuperAudinece_new" USING ("cAudience"::text::"SuperAudinece_new");
ALTER TABLE "UserShareToGroupPost" ALTER COLUMN "cAudience" TYPE "SuperAudinece_new" USING ("cAudience"::text::"SuperAudinece_new");
ALTER TYPE "SuperAudinece" RENAME TO "SuperAudinece_old";
ALTER TYPE "SuperAudinece_new" RENAME TO "SuperAudinece";
DROP TYPE "public"."SuperAudinece_old";
COMMIT;

-- AlterTable
ALTER TABLE "UserPost" ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "doing" DROP NOT NULL,
ALTER COLUMN "doingWhat" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "homeTown" TEXT,
    "currentCity" TEXT,
    "bio" TEXT,
    "relationShipStatus" TEXT,
    "nickName" TEXT,
    "aboutYou" TEXT,
    "favoriteQuotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "previousCityId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreviousCity" (
    "id" TEXT NOT NULL,
    "dateYear" TEXT NOT NULL,
    "dateMonth" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PreviousCity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileId" TEXT,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollgeProfile" (
    "id" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "attendedFor" TEXT NOT NULL,
    "graduated" BOOLEAN NOT NULL,
    "profileId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CollgeProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Concentraions" (
    "id" TEXT NOT NULL,
    "concentration" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "collgeProfileId" TEXT,

    CONSTRAINT "Concentraions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebsiteProfile" (
    "id" TEXT NOT NULL,
    "profileId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WebsiteProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchoolProifle" (
    "id" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "graduated" BOOLEAN NOT NULL,
    "profileId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SchoolProifle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkProfile" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3),
    "currentlyWorking" BOOLEAN,
    "profileId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToUserPost" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserToUserPost_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserToUserPost_B_index" ON "_UserToUserPost"("B");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_previousCityId_fkey" FOREIGN KEY ("previousCityId") REFERENCES "PreviousCity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollgeProfile" ADD CONSTRAINT "CollgeProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concentraions" ADD CONSTRAINT "Concentraions_collgeProfileId_fkey" FOREIGN KEY ("collgeProfileId") REFERENCES "CollgeProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteProfile" ADD CONSTRAINT "WebsiteProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolProifle" ADD CONSTRAINT "SchoolProifle_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkProfile" ADD CONSTRAINT "WorkProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToUserPost" ADD CONSTRAINT "_UserToUserPost_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToUserPost" ADD CONSTRAINT "_UserToUserPost_B_fkey" FOREIGN KEY ("B") REFERENCES "UserPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;
