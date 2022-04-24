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
  id?: string;
  token: string;
  device: {
    uniqueID: string;
    brand: string;
    model: string;
  };
  createdAt?: string;
}
