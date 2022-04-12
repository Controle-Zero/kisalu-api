import { Socket } from "socket.io";
import SocketUserInfo from "./socketUserInfo";
import { ResponsePayload } from "./payload";

export interface ResponseEventContext {
  payload: ResponsePayload;
  socket: Socket;
  sockets: SocketUserInfo[];
}
