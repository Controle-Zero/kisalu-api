import { Morada } from "../types/Morada";

export function splitMorada(morada: string) : Morada {
  const [provincia, distrito, bairro] = morada.split(", ");
  return { provincia, distrito, bairro } as Morada;
}
