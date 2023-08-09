import { NextAuthOptions } from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { prisma } from '@/app/lib/prisma'
import { compare } from 'bcryptjs'
import User from '@/app/models/userModel'


export const options: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_SECRET as string,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: "Sign in",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "email",
    //       placeholder: "example@example.com",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },
      // async authorize(credentials) {
      //   if (!credentials?.email || !credentials.password) {
      //     return null;
      //   }

      //   const user = await prisma.user.findUnique({
      //     where: {
      //       email: credentials.email,
      //     },
      //   });

      //   if (!user || !(await compare(credentials.password, user.password))) {
      //     return null;
      //   }

      //   return {
      //     id: user.id,
      //     email: user.email,
      //     name: user.name,
      //     randomKey: "Hey cool",
      //   };
      // },
    // })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials });

      if(account?.type === 'oauth') {
        return await signInWithOAuth({ account, profile });
      }

      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  }
}

const signInWithOAuth = async ({ account, profile }: { account: any, profile: any}) => {
  console.log(account, profile);
  const user = await User.findOne({ email: profile?.response?.email });
  
  if(user) return true;

  let newUser = new User();

  if(account.provider === 'naver') {
    newUser = new User({
      name: profile?.response?.name ,
      email: profile?.response?.email,
      image: profile?.response?.profile_image
    })
  }
  
  await newUser.save();

  return true;
}