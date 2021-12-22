-- CreateTable
CREATE TABLE "PrestadorCategoria" (
    "idPrestador" TEXT NOT NULL,
    "idCategoria" TEXT NOT NULL,

    CONSTRAINT "PrestadorCategoria_pkey" PRIMARY KEY ("idPrestador","idCategoria")
);

-- AddForeignKey
ALTER TABLE "PrestadorCategoria" ADD CONSTRAINT "PrestadorCategoria_idPrestador_fkey" FOREIGN KEY ("idPrestador") REFERENCES "prestadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrestadorCategoria" ADD CONSTRAINT "PrestadorCategoria_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
