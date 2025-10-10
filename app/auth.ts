// src/app/api/auth/[...nextauth]/route.ts (or route.js)
import { verifyPassword } from "@/app/libs/auth/verifypassword";
import { NextAuthConfig } from "next-auth";

import Credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const user = await prisma?.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user) {
          throw new Error(
            "The email or mobile number you entered isn’t connected to an account. Find your account and log in."
          );
        }

        const isValid = await verifyPassword(
          credentials.password as string,
          user.password
        );
        if (!isValid) {
          throw new Error("Invalid username or password");
        }
        return {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          profilePicture:
            user.gender === "male"
              ? "/brands/male-d.jpg"
              : "/brands/female-d.jpg",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      // Add user ID to token on sign in
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.profilePicture = user.profilePicture;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user ID to session
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.profilePicture = token.profilePicture as string;
      }
      return session;
    },
  },
};
