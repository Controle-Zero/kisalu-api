import { Server } from "socket.io";
import { atividadeChannel } from "../channels/atividade/handler";
import http from "http";
import { createAdapter } from "@socket.io/cluster-adapter";
import { setupWorker } from "@socket.io/sticky";

export default function webSocketApp(httpServer: http.Server) {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
    path: "/websocket",
  });

  io.adapter(createAdapter());

  setupWorker(io);

  atividadeChannel(io);
}
