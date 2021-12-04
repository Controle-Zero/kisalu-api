import { scrypt, randomBytes, scryptSync } from "crypto";

export function encryptData(data: string): string {
  const salt = randomBytes(16).toString("hex");
  const hashedData = scryptSync(data, salt, 64).toString("hex");

  return `${salt}:${hashedData}`;
}
