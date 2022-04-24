import Atividade from "./atividade.models";

export default interface Cliente {
  id: string;
  bi: string;
  nome: string;
  dataNasc: Date;
  morada: string;
  email: string;
  telefone: string;
  password: string;
  loginInfo?: LoginInfo;
  atividades?: Atividade[];
}

export interface LoginInfo {
  uniqueID: string;
  token: string;
  device: {
    brand: string;
    model: string;
  };
  createdAt?: string;
}
