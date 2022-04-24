/*
  Warnings:

  - Added the required column `deviceId` to the `login_info` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "login_info" ADD COLUMN     "deviceId" TEXT NOT NULL;
