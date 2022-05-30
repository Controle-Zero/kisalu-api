import Mustache from "mustache";
import { splitMorada } from "../functions/splitMorada";
import { atividadeTemplateFile } from "../templates/atividade.templates";
import dayjs from "dayjs";

export default function atividadeTemplate(
  atividade,
  cliente,
  provedor,
  categoria
) {
  const view = {
    atividade,
    cliente,
    provedor,
    categoria,
    moradaCliente: splitMorada(cliente.morada),
    moradaProvedor: splitMorada(provedor.morada),
    data: dayjs(atividade.dataFinalizado).format("DD-MM-YYYY, HH:mm A"),
  };

  return Mustache.render(atividadeTemplateFile(), view);
}
