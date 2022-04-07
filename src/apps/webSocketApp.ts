import { Server } from "socket.io";
import { atividadeChannel } from "../channels/atividade/handler";
import http from "http";

export default function webSocketApp(httpServer: http.Server) {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
    path: "/websocket",
  });

  atividadeChannel(io);
}
