/*
  Warnings:

  - A unique constraint covering the columns `[iban]` on the table `prestadores` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "prestadores_iban_key" ON "prestadores"("iban");
