import prisma from "@/app/libs/prisma";
import { Post_USER, User } from "@/generated/prisma";
import { randomTexts } from "../../dummy";

const userPostOption = ["contentonly", "mediasonly", "both"];
type UserPostOption = "contentonly" | "mediasonly" | "both";
let randomUser: User;
let posts: Post_USER[];
async function getRandomUser() {
  const users = await prisma.user.findMany({});
  const randomUserIndex = Math.floor(Math.random() * users.length);

  const _randomUser = users[randomUserIndex];
  randomUser = _randomUser;
}

async function getPosts() {
  const _posts = await prisma.post_USER.findMany({});
  posts = _posts;
}

await getPosts();
await getRandomUser();

export function _seed() {
  return posts.map((post) => {
    const randomTextIndex = Math.floor(Math.random() * 20);
    const content = randomTexts[randomTextIndex];

    const randomPostOptionIndex = Math.floor(Math.random() * 3);
    const randomPostOption: UserPostOption = userPostOption[
      randomPostOptionIndex
    ] as UserPostOption;
    const randomPhotoCount = Math.floor(Math.random() * 6) + 1;

    return prisma.comment_USER.create({
      data: {
        user: {
          connect: { id: randomUser.id },
        },

        post: {
          connect: { id: post.id },
        },
        content:
          randomPostOption === "both" || randomPostOption === "contentonly"
            ? content
            : null,
        mediaUrl:
          randomPostOption === "both" || randomPostOption === "mediasonly"
            ? `/user/${randomPhotoCount}.jpg`
            : null,
      },
    });
  });
}
