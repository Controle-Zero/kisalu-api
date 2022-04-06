import { Socket } from "socket.io";
import { ResponsePayload } from "./payload";

export interface ResponseEventContext {
  payload: ResponsePayload;
  socket: Socket;
  sockets: { [key: string]: string }[];
}
