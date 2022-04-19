import mongoose from "mongoose";
import dotenv from "dotenv";
import { log } from "../log";

dotenv.config();

export async function initMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (err) {
    log.error("An error occured while connecting to Mongo DB server");
    throw err;
  }
}
