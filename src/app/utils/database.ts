import mongoose from "mongoose"

const DB_URI = process.env.DATABASE_URL || "";
const DEBUG_MODE = process.env.DEBUG_MODE || false;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .set({ debug: DEBUG_MODE as boolean, strictQuery: false })
      .connect(`${DB_URI}`)
      .then((mongoose) => mongoose);
      console.log('Mongodb connected...');
  }
  

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;