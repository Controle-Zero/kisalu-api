import { Morada } from "../types/Morada";

export function splitMorada(moradaArray: string): Morada {
  let morada: Morada;
  [morada.provincia, morada.distrito, morada.bairro] = moradaArray.split(",");
  return morada;
}
