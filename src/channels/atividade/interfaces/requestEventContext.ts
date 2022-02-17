import { Server, Socket } from "socket.io";

export default interface RequestEventContext {
  socket: Socket;
  io: Server;
  idProvedor: string;
}
