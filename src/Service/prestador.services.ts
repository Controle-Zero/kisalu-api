import prisma from "../database/uservices.database";
import Prestador from "../Model/prestador.models";

export function criarPrestador(prestador: Prestador) {}

export function actualizarPrestador(
  idPrestador: number,
  prestador: Prestador
) {}

export function retornarPrestador(idPrestador: number) {}

export function apagarPrestador(idPrestador: number) {}
