import NextAuth, { NextAuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectToDatabase from "@/lib/dbconnect/dbconnect";
import User from "@/lib/modals/User";
import { NextApiRequest, NextApiResponse } from "next";

// Define custom types for the credentials
type Credentials = {
  email: string;
  password: string;
};

// Extend the User type to include custom properties if necessary
interface CustomUser extends NextAuthUser {
  // Add custom properties here if needed
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Credentials | undefined) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        try {
          await connectToDatabase();
          console.log("Connected to database");
          const user = await User.findOne({ email });

          if (!user) {
            console.log("User not found");
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            console.log("Invalid password");
            return null;
          }

          console.log("User authenticated successfully");
          return user as CustomUser;
        } catch (error) {
          console.error("Authorization error: ", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/Login",
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);
