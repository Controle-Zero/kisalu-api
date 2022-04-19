import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function initMongoDB() {
  return await mongoose.connect(process.env.MONGO_URL);
}
