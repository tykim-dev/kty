import NextAuth from 'next-auth'
import { options } from './options'
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

const handler = NextAuth(options);

export { handler as GET, handler as POST };