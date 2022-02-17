/*
  Warnings:

  - You are about to drop the column `token` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `prestadores` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "clientes_token_key";

-- DropIndex
DROP INDEX "prestadores_token_key";

-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "token";

-- AlterTable
ALTER TABLE "prestadores" DROP COLUMN "token";
