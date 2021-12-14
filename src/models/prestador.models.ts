import Cliente from "./cliente.models";
import Atividade from "./atividade.models";

export default interface Prestador extends Cliente {
  idPrestador: string;
  estado: string;
  iban: string;
  classificacao: number;
  numAvaliacoes: number;
  rate: number;
  descricao: string;
  atividades: Atividade[];
}
