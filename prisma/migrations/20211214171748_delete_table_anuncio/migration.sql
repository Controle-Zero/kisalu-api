/*
  Warnings:

  - You are about to drop the column `anuncioId` on the `atividades` table. All the data in the column will be lost.
  - You are about to drop the `anuncios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "anuncios" DROP CONSTRAINT "anuncios_prestadorId_fkey";

-- DropForeignKey
ALTER TABLE "atividades" DROP CONSTRAINT "atividades_anuncioId_fkey";

-- AlterTable
ALTER TABLE "atividades" DROP COLUMN "anuncioId";

-- AlterTable
ALTER TABLE "prestadores" ADD COLUMN     "habilidades" TEXT[];

-- DropTable
DROP TABLE "anuncios";
