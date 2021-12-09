/*
  Warnings:

  - A unique constraint covering the columns `[clienteId]` on the table `refresh_token_cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[prestadorId]` on the table `refresh_token_prestador` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nome` to the `prestadores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "prestadores" ADD COLUMN     "nome" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "refresh_token_cliente_clienteId_key" ON "refresh_token_cliente"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_token_prestador_prestadorId_key" ON "refresh_token_prestador"("prestadorId");
