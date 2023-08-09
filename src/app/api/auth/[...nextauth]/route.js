import NextAuth from 'next-auth'
import { options } from './options'
import connectDB from '@/app/utils/database'

connectDB();

const handler = NextAuth(options);

export { handler as GET, handler as POST };