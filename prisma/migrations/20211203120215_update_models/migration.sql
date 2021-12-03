/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Prestador` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nome` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "nome" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Prestador_email_key" ON "Prestador"("email");
