/*
  Warnings:

  - You are about to drop the column `habilidades` on the `prestadores` table. All the data in the column will be lost.
  - Added the required column `categoriaId` to the `atividades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "atividades" ADD COLUMN     "categoriaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "prestadores" DROP COLUMN "habilidades";

-- CreateTable
CREATE TABLE "categorias" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoriaToPrestador" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriaToPrestador_AB_unique" ON "_CategoriaToPrestador"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriaToPrestador_B_index" ON "_CategoriaToPrestador"("B");

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriaToPrestador" ADD FOREIGN KEY ("A") REFERENCES "categorias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriaToPrestador" ADD FOREIGN KEY ("B") REFERENCES "prestadores"("id") ON DELETE CASCADE ON UPDATE CASCADE;
