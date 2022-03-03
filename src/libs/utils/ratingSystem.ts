import Atividade from "../../models/atividade.models";

interface CustomAtividade {
  atividades: Atividade[];
}

export function getRate(atividades: CustomAtividade) {
  const sum = atividades.atividades
    .map((m) => m.avaliacao)
    .reduce((a, b) => a + b, 0);

  return atividades.atividades.length > 0
    ? sum / atividades.atividades.length
    : undefined;
}
