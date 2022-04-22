import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  // Configure one or more authentication providers
  // secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  // pages: {
  //   signIn: "/auth/signin",
  // },
  // callbacks: {
  //   async session({ session, token, user }) {
  //     session.user.username = session.user.name.split(" ").join("_");
  //     session.user.uid = token.sub;
  //     return session;
  //   },
  // },
  secret: process.env.JWT_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/home",
  },
  session: {
    strategy: "jwt",
  },
});
