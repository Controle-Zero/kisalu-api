import { Morada } from "../libs/document_generator/types/Morada";
import Atividade from "./atividade.models";

export default interface Cliente {
  id: string;
  bi: string;
  nome: string;
  dataNasc: Date;
  morada: Morada;
  email: string;
  telefone: string;
  password: string;
  imageUrl?: string;
  loginInfo?: LoginInfo;
  atividades?: Atividade[];
  criadoEm: Date;
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
