import {
  RequestPayload,
  ResponsePayload,
  Roles,
} from "../../channels/interfaces/payloads";
import Atividade from "../../models/atividade.models";
import Cliente from "../../models/cliente.models";
import { DataHandlerContext, getData } from "../helpers/dataHandler";

export interface ClientRequestPayload {
  cliente: Cliente;
  categoria: string;
  atividade: Atividade;
}

const data: DataHandlerContext = getData();

export function getRequestPayload(): RequestPayload {
  return {
    TriggeredBy: {
      id: data.cliente.id,
      role: Roles.CLIENTE,
    },
    atividade: data.atividade,
  };
}

export function getResponsePayload(): ResponsePayload {
  return {
    TriggeredBy: {
      id: data.cliente.id,
      role: Roles.PRESTADOR,
    },
    atividade: data.atividade,
  };
}

export function getClientRequestPayload(): ClientRequestPayload {
  return {
    cliente: data.cliente,
    categoria: data.categoria.id,
    atividade: data.atividade,
  };
}
