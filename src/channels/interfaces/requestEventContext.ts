import { Server } from "socket.io";
import { RequestPayload } from "./payloads";

export default interface RequestEventContext {
  payload: RequestPayload;
  io: Server;
}
