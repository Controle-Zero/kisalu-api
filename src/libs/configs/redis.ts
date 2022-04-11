import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const redis = createClient({ url: process.env.REDIS_URL });

export default redis;
