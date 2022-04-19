import {
  AtividadeRequestPayload,
  AtividadeResponsePayload,
} from "./atividadePayload";

export enum Roles {
  CLIENTE = "CLIENTE",
  PRESTADOR = "PRESTADOR",
}

export interface RequestPayload {
  TriggeredBy: {
    id: string;
    role: Roles;
  };
  atividade: AtividadeRequestPayload;
}

export interface ResponsePayload {
  TriggeredBy: {
    id: string;
    role: Roles;
  };
  atividade: AtividadeResponsePayload;
}

export interface MessagePayload {
  from: string;
  to: string;
  atividadeId: string;
  content: string;
  sentAt: Date;
}
