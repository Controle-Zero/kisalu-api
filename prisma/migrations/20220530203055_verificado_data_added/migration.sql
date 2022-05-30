-- AlterTable
ALTER TABLE "atividades" ADD COLUMN     "feedback" TEXT;

-- AlterTable
ALTER TABLE "clientes" ADD COLUMN     "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "prestadores" ADD COLUMN     "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "verificado" BOOLEAN NOT NULL DEFAULT false;
