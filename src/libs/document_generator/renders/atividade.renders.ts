import Atividade from "../../../models/atividade.models";
import Categoria from "../../../models/categoria.models";
import Cliente from "../../../models/cliente.models";
import Prestador from "../../../models/prestador.models";
import Mustache from "mustache";
import { splitMorada } from "../functions/splitMorada";
import { atividadeTemplateFile } from "../templates/atividade.templates";
import dayjs from "dayjs";

export interface AtividadeTemplateContext {
  atividade: Atividade;
  cliente: Cliente;
  provedor: Prestador;
  categoria: Categoria;
}

export default function atividadeTemplate({
  atividade,
  cliente,
  provedor,
  categoria,
}: AtividadeTemplateContext) {

  const view = {
    atividade,
    cliente,
    provedor,
    categoria,
    moradaCliente : splitMorada(cliente.morada),
    moradaProvedor: splitMorada(provedor.morada),
    data: dayjs(atividade.dataFinalizado).format("DD-MM-YYYY, HH:mm A"),
  };

  return Mustache.render(atividadeTemplateFile(), view);
}
