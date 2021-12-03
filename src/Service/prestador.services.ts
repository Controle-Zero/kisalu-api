import prisma from "../database/uservices.database";
import Prestador from "../Model/prestador.models";

export function criarPrestador(prestador: Prestador) {}

export function actualizarPrestador(
  idPrestador: Number,
  prestador: Prestador
) {}

export function retornarPrestador(idPrestador: Number) {}

export function apagarPrestador(idPrestador: Number) {}
