/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `clientes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `prestadores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `prestadores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clientes" ADD COLUMN     "token" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "prestadores" ADD COLUMN     "token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "clientes_token_key" ON "clientes"("token");

-- CreateIndex
CREATE UNIQUE INDEX "prestadores_token_key" ON "prestadores"("token");
