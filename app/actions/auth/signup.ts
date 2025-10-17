"use server";

import { UserFormData } from "@/app/libs/schemas/user-schema";
import prisma from "@/app/libs/prisma";
import bcrypt from "bcryptjs";

export async function signUp(formData: UserFormData) {
  try {
    const newBirthDate = parseInt(formData.birthday) + 1;
    const birthDateString = `${formData.birthyear}-${formData.birthmonth}-${newBirthDate}`;

    const birthDate = new Date(birthDateString);

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
        password: await bcrypt.hash(formData.password, 10),
      },
    });

    if (user) {
      return {
        success: true,

        message: `Created !`,
      };
    }
  } catch (error) {
    return {
      message: "error",
      success: true,
    };
  } finally {
    prisma.$disconnect();
  }
}
