import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";

const authOption = {
  providers: [githubAuth],
};

const handler = NextAuth();
