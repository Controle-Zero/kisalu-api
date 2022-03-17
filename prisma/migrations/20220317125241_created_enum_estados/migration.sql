/*
  Warnings:

  - The `estado` column on the `atividades` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Estados" AS ENUM ('PENDENTE', 'FINALIZADA', 'ATIVA');

-- AlterTable
ALTER TABLE "atividades" DROP COLUMN "estado",
ADD COLUMN     "estado" "Estados" NOT NULL DEFAULT E'PENDENTE';
