/*
  Warnings:

  - You are about to drop the `refresh_token_cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `refresh_token_prestador` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "refresh_token_cliente" DROP CONSTRAINT "refresh_token_cliente_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "refresh_token_prestador" DROP CONSTRAINT "refresh_token_prestador_prestadorId_fkey";

-- AlterTable
ALTER TABLE "clientes" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "prestadores" ADD COLUMN     "imageUrl" TEXT;

-- DropTable
DROP TABLE "refresh_token_cliente";

-- DropTable
DROP TABLE "refresh_token_prestador";
