import IORedis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const url: string =
  process.env.NODE_ENV === "DEVELOPMENT"
    ? ""
    : `redis://:8fYiS412QAfVUsNchI7fE1tAi6xazOT3@redis-15023.c245.us-east-1-3.ec2.cloud.redislabs.com:15023/`;

const redis = new IORedis(url);

export default redis;
