/*
  Warnings:

  - You are about to drop the `_CategoriaToPrestador` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoriaToPrestador" DROP CONSTRAINT "_CategoriaToPrestador_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoriaToPrestador" DROP CONSTRAINT "_CategoriaToPrestador_B_fkey";

-- DropTable
DROP TABLE "_CategoriaToPrestador";
