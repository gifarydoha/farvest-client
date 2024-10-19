import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, query }) {
      const client = await clientPromise;
      const db = client.db("farvestDB");

      // Check if the role was provided in the query
      const role = query?.role || "farmer"; // Default to farmer if no role is provided

      // Check if the user already exists
      const existingUser = await db
        .collection("users")
        .findOne({ email: profile.email });

      if (!existingUser) {
        // If user does not exist, create new user with the role
        await db.collection("users").insertOne({
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: role, // Store the role in the user's document
          createdAt: new Date(),
        });
      } else {
        // Update the role if user already exists and role is different
        if (existingUser.role !== role) {
          await db
            .collection("users")
            .updateOne({ email: profile.email }, { $set: { role: role } });
        }
      }

      return true;
    },
    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role; // Add the role to the session
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.sub = user.id; // Attach user ID to the token
        token.role = user.role; // Attach user role to the token
      }
      return token;
    },
  },
  debug: process.env.NODE_ENV === "development",
});

export const GET = handler;
export const POST = handler;
