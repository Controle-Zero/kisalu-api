import IORedis, { RedisOptions } from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const url: string =
  process.env.NODE_ENV === "DEVELOPMENT"
    ? ""
    : `redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_URL}:${process.env.REDIS_PORT}/${process.env.REDIS_DB}`;

const redis = new IORedis(url);

export default redis;
