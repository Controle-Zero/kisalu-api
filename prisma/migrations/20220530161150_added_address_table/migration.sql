/*
  Warnings:

  - You are about to drop the column `morada` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `morada` on the `prestadores` table. All the data in the column will be lost.
  - Added the required column `moradaId` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moradaId` to the `prestadores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "morada",
ADD COLUMN     "moradaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "prestadores" DROP COLUMN "morada",
ADD COLUMN     "moradaId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Endereco" (
    "id" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "distrito" TEXT,
    "bairro" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "complemento" TEXT,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "clientes" ADD CONSTRAINT "clientes_moradaId_fkey" FOREIGN KEY ("moradaId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prestadores" ADD CONSTRAINT "prestadores_moradaId_fkey" FOREIGN KEY ("moradaId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
