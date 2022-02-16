import Atividade from "./atividade.models";
import Token from "./token.models";

export default interface Cliente {
  id: string;
  bi: string;
  nome: string;
  dataNasc: Date;
  morada: string;
  email: string;
  telefone: string;
  password: string;
  tokens: Token[];
  atividades?: Atividade[];
}
