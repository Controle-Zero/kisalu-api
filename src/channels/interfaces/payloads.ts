import {
  AtividadeRequestPayload,
  AtividadeResponsePayload,
} from "./atividadePayload";

import { MessageIU as MessagePayload } from "../../models/chat.models";

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

export interface PrivateMessagePayload {
  TriggeredBy: {
    id: string;
    role: Roles;
  };
  messageInfo: Omit<MessagePayload, "createdAt" | "updatedAt">;
}
