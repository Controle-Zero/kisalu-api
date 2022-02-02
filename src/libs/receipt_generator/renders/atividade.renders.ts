import Atividade from "../../../models/atividade.models";
import Categoria from "../../../models/categoria.model";
import Cliente from "../../../models/cliente.models";
import Prestador from "../../../models/prestador.models";
import Mustache from "mustache";
import { splitMorada } from "../functions/splitMorada";
import { Morada } from "../types/Morada";
import { atividadeTemplateFile } from "../templates/atividade.templates";

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
  const moradaCliente: Morada = splitMorada(cliente.morada);
  const moradaProvedor: Morada = splitMorada(provedor.morada);

  const view = {
    atividade,
    cliente,
    provedor,
    categoria,
    moradaCliente,
    moradaProvedor,
  };

  return Mustache.render(atividadeTemplateFile(), view);
}
