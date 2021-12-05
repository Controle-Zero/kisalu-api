-- CreateTable
CREATE TABLE "refresh_token_cliente" (
    "id" TEXT NOT NULL,
    "expiraEm" INTEGER NOT NULL,
    "clienteId" TEXT NOT NULL,

    CONSTRAINT "refresh_token_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_token_prestador" (
    "id" TEXT NOT NULL,
    "expiraEm" INTEGER NOT NULL,
    "prestadorId" TEXT NOT NULL,

    CONSTRAINT "refresh_token_prestador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "refresh_token_cliente_clienteId_key" ON "refresh_token_cliente"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_token_prestador_prestadorId_key" ON "refresh_token_prestador"("prestadorId");

-- AddForeignKey
ALTER TABLE "refresh_token_cliente" ADD CONSTRAINT "refresh_token_cliente_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_token_prestador" ADD CONSTRAINT "refresh_token_prestador_prestadorId_fkey" FOREIGN KEY ("prestadorId") REFERENCES "prestadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
