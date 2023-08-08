import { NextAuthOptions } from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { prisma } from '@/app/lib/prisma'
import { compare } from 'bcryptjs'
import User from '@/app/models/userModel'
import { Account, Profile } from 'next-auth'

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
      console.log({account, profile});

      // if(account?.type === 'oauth') {
      //   return await signInWithOAuth({ account, profile });
      // }

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

const signInWithOAuth = async ({ account, profile }: { account: Account, profile: Profile}) => {
  const user = await User.findOne({ email: profile.email });
  
  if(user) return true;

  let newUser = {};

  // if(account.provider === 'kakao') {
  //   newUser = new User({
  //     name: profile['response'],
  //     email: profile.response.email
  //   })
  // }

  // const newUser = new User({
  //   name: profile.name,
  //   email: profile.response.email
  // })

  // console.log(newUser);
  
  // await newUser.save();

  return true;
}