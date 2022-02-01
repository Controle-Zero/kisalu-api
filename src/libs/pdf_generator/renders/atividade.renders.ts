import Atividade from "../../../models/atividade.models";
import Categoria from "../../../models/categoria.model";
import Cliente from "../../../models/cliente.models";
import Prestador from "../../../models/prestador.models";
import Mustache from "mustache";

interface AtividadeTemplateContext {
  atividade: Atividade;
  cliente: Cliente;
  provedor: Prestador;
  categoria: Categoria;
}

type Morada = {
  provincia: string;
  distrito: string;
  bairro: string;
};

function splitMorada(moradaArray: string): Morada {
  let morada: Morada;
  [morada.provincia, morada.distrito, morada.bairro] = moradaArray.split(",");
  return morada;
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

  return Mustache.render("../templates/atividade.templates.html", view);
}