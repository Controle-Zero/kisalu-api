import { Server } from "socket.io";
import { RequestPayload } from "./payload";

export default interface RequestEventContext {
  payload: RequestPayload;
  io: Server;
}
