import db from "../database/uservices.database";
import Prestador from "../models/prestador.models";

export async function criarPrestadorService(prestador: Prestador) {
  await db.prestador.create({
    data: prestador,
  });
}

export async function actualizarPrestadorService(
  idPrestador: number,
  prestador: Prestador
) {}

export async function retornarPrestadorService(idPrestador: number) {}

export async function apagarPrestadorService(idPrestador: number) {}
