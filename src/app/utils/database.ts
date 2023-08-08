import mongoose from "mongoose"

const connectDB = async () => {
  if(mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    
    console.log('Mongodb connected.');

    return true;
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;