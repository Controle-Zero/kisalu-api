import { randomBytes, scryptSync, timingSafeEqual } from "crypto";

export function encryptData(data: string): string {
  const salt = randomBytes(16).toString("hex");
  const hashedData = scryptSync(data, salt, 64).toString("hex");

  return `${salt}:${hashedData}`;
}

export function compareEncryptedData(data1: string, data2: string) {
  const [salt, key] = data1.split(":");
  const hashedBuffer = scryptSync(data2, salt, 64);

  const keyBuffer = Buffer.from(key, "hex");
  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  return match;
}
