/*
  Warnings:

  - You are about to drop the column `loginInfo` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `loginInfo` on the `prestadores` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "loginInfo";

-- AlterTable
ALTER TABLE "prestadores" DROP COLUMN "loginInfo";

-- CreateTable
CREATE TABLE "login_info" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "device" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clienteId" TEXT,
    "prestadorId" TEXT,

    CONSTRAINT "login_info_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "login_info" ADD CONSTRAINT "login_info_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "login_info" ADD CONSTRAINT "login_info_prestadorId_fkey" FOREIGN KEY ("prestadorId") REFERENCES "prestadores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
