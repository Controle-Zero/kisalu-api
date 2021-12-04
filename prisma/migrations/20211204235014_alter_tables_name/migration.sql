/*
  Warnings:

  - You are about to drop the `Anuncio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Atividade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Prestador` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Anuncio" DROP CONSTRAINT "Anuncio_prestadorId_fkey";

-- DropForeignKey
ALTER TABLE "Atividade" DROP CONSTRAINT "Atividade_anuncioId_fkey";

-- DropForeignKey
ALTER TABLE "Atividade" DROP CONSTRAINT "Atividade_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Atividade" DROP CONSTRAINT "Atividade_prestadorId_fkey";

-- DropTable
DROP TABLE "Anuncio";

-- DropTable
DROP TABLE "Atividade";

-- DropTable
DROP TABLE "Cliente";

-- DropTable
DROP TABLE "Prestador";

-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "bi" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNasc" TIMESTAMP(3) NOT NULL,
    "morada" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anuncios" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "dataCriado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "images" TEXT,
    "prestadorId" TEXT,

    CONSTRAINT "anuncios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prestadores" (
    "id" TEXT NOT NULL,
    "bi" TEXT NOT NULL,
    "dataNasc" TIMESTAMP(3) NOT NULL,
    "morada" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "iban" TEXT NOT NULL,
    "classificacao" DOUBLE PRECISION NOT NULL,
    "numAvaliacoes" INTEGER NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "prestadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atividades" (
    "id" TEXT NOT NULL,
    "dataCriado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataFinalizado" TIMESTAMP(3) NOT NULL,
    "valorAssociado" DOUBLE PRECISION NOT NULL,
    "numRef" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "prestadorId" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "anuncioId" TEXT NOT NULL,

    CONSTRAINT "atividades_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_bi_key" ON "clientes"("bi");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "prestadores_bi_key" ON "prestadores"("bi");

-- CreateIndex
CREATE UNIQUE INDEX "prestadores_email_key" ON "prestadores"("email");

-- AddForeignKey
ALTER TABLE "anuncios" ADD CONSTRAINT "anuncios_prestadorId_fkey" FOREIGN KEY ("prestadorId") REFERENCES "prestadores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_anuncioId_fkey" FOREIGN KEY ("anuncioId") REFERENCES "anuncios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_prestadorId_fkey" FOREIGN KEY ("prestadorId") REFERENCES "prestadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
