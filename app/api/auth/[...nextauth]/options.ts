import { API_LOCAL } from "@/utils/constant";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  secret: "hjhftdrtyuiopk;lmknkjgfyru",
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          name: "email",
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { name: "password", label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`${API_LOCAL}/api/signin`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        if (user) {
          return {
            ...user,
            name: user?.data?.name,
            email: user?.data?.email,
            role: user?.data?.role,
          };
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },

  callbacks: {
    async redirect() {
      return "/";
    },
    async jwt({ user, token }: any) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }: any) {
      if (session) session.user.role = token.role;
      return session;
    },
  },
};
