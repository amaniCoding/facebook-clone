"use server";

import { UserFormData } from "@/app/libs/schemas/user-schema";
import prisma from "@/app/libs/prisma";

export async function signUp(formData: UserFormData) {
  try {
    const birthDateString = `${formData.birthyear}-${formData.birthmonth}-${formData.birthday}`;

    const birthDate = new Date(birthDateString).toISOString();
    const existingUser = await prisma.user.findFirst({
      where: {
        email: formData.email,
      },
    });

    if (existingUser) {
      return {
        errors: {
          email: "Email you provided already taken",
        },
      };
    }
    const user = await prisma.user.create({
      data: {
        firstName: formData.fname,
        lastName: formData.lname,
        birthDate: birthDate,
        gender: formData.gender,
        customGender: formData.customgender ? formData.customgender : null,
        customGenderPronoun: formData.customgenderpronoun
          ? formData.customgenderpronoun
          : null,
        email: formData.email,
        password: formData.password,
      },
    });

    if (user) {
      return {
        success: true,
      };
    }
  } catch (error) {
    // Handle other unexpected errors
    console.error("An unexpected error occurred:", error);
  } finally {
    prisma.$disconnect();
  }
}
