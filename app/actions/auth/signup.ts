"use server";

import { UserFormData } from "@/app/libs/schemas/user-schema";
import prisma from "@/app/libs/prisma";
import bcrypt from "bcryptjs";
import { success } from "zod";

export async function signUp(formData: UserFormData) {
  try {
    const newBirthDate = parseInt(formData.birthday) + 1;
    const birthDateString = `${formData.birthyear}-${formData.birthmonth}-${newBirthDate}`;

    const birthDate = new Date(birthDateString);

    return {
      message: "working",
      success: true,
    };
  } catch (error) {
  } finally {
    prisma.$disconnect();
  }
}
