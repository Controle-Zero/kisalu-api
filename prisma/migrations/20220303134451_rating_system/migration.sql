/*
  Warnings:

  - You are about to drop the column `classificacao` on the `prestadores` table. All the data in the column will be lost.
  - You are about to drop the column `numAvaliacoes` on the `prestadores` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "atividades" ADD COLUMN     "avaliacao" INTEGER;

-- AlterTable
ALTER TABLE "prestadores" DROP COLUMN "classificacao",
DROP COLUMN "numAvaliacoes";
