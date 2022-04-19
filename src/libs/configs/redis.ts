import IORedis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redis = new IORedis();

export default redis;
