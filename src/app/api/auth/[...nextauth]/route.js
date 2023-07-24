import NextAuth from "next-auth"
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from "next-auth/providers/naver"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_SECRET,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_SECRET,
    }),
  ],
  // adapter: MongoDBAdapter(clientPromise),
  // session: {
  //   strategy: "jwt",
  // },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session
    }
  },
});

export { handler as GET, handler as POST };