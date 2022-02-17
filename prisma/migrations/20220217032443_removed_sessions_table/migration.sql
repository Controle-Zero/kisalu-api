/*
  Warnings:

  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `loginInfo` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loginInfo` to the `prestadores` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_prestadorId_fkey";

-- AlterTable
ALTER TABLE "clientes" ADD COLUMN     "loginInfo" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "prestadores" ADD COLUMN     "loginInfo" JSONB NOT NULL;

-- DropTable
DROP TABLE "sessions";
