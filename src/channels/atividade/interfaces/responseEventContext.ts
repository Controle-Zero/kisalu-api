import { Socket } from "socket.io";

export interface ResponseEventContext {
  socket: Socket;
  sockets: { [key: string]: string }[];
}
