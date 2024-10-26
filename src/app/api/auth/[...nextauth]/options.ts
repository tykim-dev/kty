import { NextAuthOptions } from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { prisma } from '@/app/lib/prisma'
import { compare } from 'bcryptjs'
import User from '@/app/models/userModel'
import connectDB from '@/app/utils/database'


export const options: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_SECRET as string,
    }),
    /*NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),*/
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
      if(account?.type === 'oauth') {
        return await signInWithOAuth({ user, account, profile });
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // const userData = await getUserByEmail({ email: token?.email || '' });
      // token.user = userData;

      return token;
    }
  }
}

const signInWithOAuth = async ({ user, account, profile }: { user: any, account: any, profile: any}) => {
  console.log({ user, account, profile });

  let newUser = new User();

  if(account.provider === 'kakao') {
    newUser = new User({
      name: user?.name ,
      email: user?.email,
      image: user?.image,
      provider: account.provider,
    })
  }

  if(account.provider === 'naver') {
    newUser = new User({
      name: profile?.response?.name ,
      email: profile?.response?.email,
      image: profile?.response?.profile_image,
      provider: account.provider,
    })
  }

  if(account.provider === 'google') {
    newUser = new User({
      name: profile?.name ,
      email: profile?.email,
      image: profile?.picture,
      provider: account.provider,
    })
  }


  if(account.provider !== 'kakao') {
    await connectDB();

    const userData = await User.findOne({ email: newUser.email });
    
    if(userData) return true;
    
    await newUser.save();
  }

  return true;
}

const getUserByEmail = async ({ email }: { email: string }) => {
  await connectDB();
    
  const user = await User.findOne({ email }).select('-password');

  if(!user) throw new Error('등록된 이메일 정보가 없습니다.');

  return { ...user._doc, _id: user._id.toString() };
}
