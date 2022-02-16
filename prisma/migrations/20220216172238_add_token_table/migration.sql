-- CreateTable
CREATE TABLE "tokens" (
    "id" TEXT NOT NULL,
    "device" JSONB NOT NULL,
    "clienteId" TEXT,
    "prestadorId" TEXT,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_prestadorId_fkey" FOREIGN KEY ("prestadorId") REFERENCES "prestadores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
