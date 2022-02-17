/*
  Warnings:

  - The primary key for the `tokens` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `brand` on the `tokens` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `tokens` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `tokens` table. All the data in the column will be lost.
  - Added the required column `device` to the `tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `tokens` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "tokens_clienteId_idx";

-- AlterTable
ALTER TABLE "tokens" DROP CONSTRAINT "tokens_pkey",
DROP COLUMN "brand",
DROP COLUMN "model",
DROP COLUMN "token",
ADD COLUMN     "device" JSONB NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "tokens_pkey" PRIMARY KEY ("id");
