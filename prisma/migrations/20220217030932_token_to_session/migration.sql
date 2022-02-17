/*
  Warnings:

  - You are about to drop the `tokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tokens" DROP CONSTRAINT "tokens_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "tokens" DROP CONSTRAINT "tokens_prestadorId_fkey";

-- DropTable
DROP TABLE "tokens";

-- CreateTable
CREATE TABLE "sessions" (
    "token" TEXT NOT NULL,
    "deviceModel" TEXT NOT NULL,
    "deviceBrand" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clienteId" TEXT,
    "prestadorId" TEXT,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("deviceModel")
);

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_prestadorId_fkey" FOREIGN KEY ("prestadorId") REFERENCES "prestadores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
