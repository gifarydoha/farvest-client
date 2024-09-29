// app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  session: {
    strategy: "jwt", // Using JWT sessions
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/sign-in", // Path to the custom sign-in page
    // You can add more custom pages as needed
  },
  adapter: MongoDBAdapter(clientPromise), // MongoDB adapter to store user info
  secret: process.env.NEXTAUTH_SECRET, // Secret for token encryption
  callbacks: {
    async signIn({ user, account, profile }) {
      // Check if the user already exists in the users collection
      const client = await clientPromise;
      const db = client.db("farvestDB"); // Replace 'mydatabase' with your actual DB name

      // Look for the user by Google ID or email
      const existingUser = await db
        .collection("users")
        .findOne({ email: profile.email });

      if (!existingUser) {
        // If the user does not exist, insert a new user
        await db.collection("users").insertOne({
          name: profile.name,
          email: profile.email,
          image: profile.picture, // Optional: User's Google profile picture
          createdAt: new Date(),
          // You could also store additional Google data if needed
        });
      }

      return true; // Return true to allow sign-in
    },
    async session({ session, token }) {
      // Attach user ID to the session
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id; // Attach user ID to the token on first sign in
      }
      return token;
    },
  },
  debug: process.env.NODE_ENV === "development", // Enable debug mode in development
});

// Export both GET and POST handlers
export const GET = handler;
export const POST = handler;
