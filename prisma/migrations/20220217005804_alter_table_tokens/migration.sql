/*
  Warnings:

  - The primary key for the `tokens` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `device` on the `tokens` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `tokens` table. All the data in the column will be lost.
  - Added the required column `brand` to the `tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tokens" DROP CONSTRAINT "tokens_pkey",
DROP COLUMN "device",
DROP COLUMN "id",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "token" TEXT NOT NULL,
ADD CONSTRAINT "tokens_pkey" PRIMARY KEY ("brand", "model");
