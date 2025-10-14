import prisma from "@/app/libs/prisma";
import { randomTexts, users } from "../dummy";
import { Gender, MediaType } from "@/generated/prisma";

const userPostOption = ["contentonly", "mediasonly", "both"];
type UserPostOption = "contentonly" | "mediasonly" | "both";

async function getRandomUser() {
  const users = await prisma.user.findMany({});
  const randomUserIndex = Math.floor(Math.random() * users.length);

  const randomUser = users[randomUserIndex];
  return randomUser;
}

function generatePhoto(photoCount: number) {
  return Array.from({ length: photoCount }, () => {
    const randomPhoto = Math.floor(Math.random() * 15) + 1;

    return {
      url: `/users/${randomPhoto}.jpg`,
      type: "image" as MediaType,
    };
  });
}
export function UserPostSeeder() {
  return Array.from({ length: 2 }, async () => {
    const user = await getRandomUser();
    const randomPostOptionIndex = Math.floor(Math.random() * 3);
    const randomPostOption: UserPostOption = userPostOption[
      randomPostOptionIndex
    ] as UserPostOption;

    const randomTextIndex = Math.floor(Math.random() * 20);
    const content = randomTexts[randomTextIndex];

    const randomPhotoCount = Math.floor(Math.random() * 6) + 1;
    return prisma.post_USER.create({
      data: {
        user: {
          connect: { id: user.id },
        },
        content:
          randomPostOption === "contentonly" || randomPostOption === "both"
            ? content
            : undefined,
        medias:
          randomPostOption === "both" || randomPostOption === "mediasonly"
            ? {
                createMany: {
                  data: generatePhoto(randomPhotoCount),
                },
              }
            : undefined,
      },
    });
  });
}

export function UserSeeder() {
  return users.map((user) => {
    return prisma.user.create({
      data: {
        firstName: user.fname,
        lastName: user.lname,
        birthDate: user.birthDay,
        gender: user.gender as Gender,
        email: user.mobileOrPhoneNumber,
        password: user.password,
      },
    });
  });
}
