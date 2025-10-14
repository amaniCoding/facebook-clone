import { UserPostSeeder, UserSeeder } from "./data";

const seedUserPost = async () => {
  await Promise.all(UserPostSeeder());
};

const seedUser = async () => {
  await Promise.all(UserSeeder());
};
export async function GET() {
  try {
    await seedUserPost();
    //await seedUser();
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
