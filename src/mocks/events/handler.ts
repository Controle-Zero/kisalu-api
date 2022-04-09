import {
  RequestPayload,
  ResponsePayload,
  Roles,
} from "../../channels/atividade/interfaces/payload";
import { DataHandlerContext, getData } from "../helpers/dataHandler";

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
