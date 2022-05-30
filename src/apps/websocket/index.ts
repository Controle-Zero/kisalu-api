import { Server } from "socket.io";
import { mainChannel } from "../../channels/handler";
import http from "http";

export default function webSocketApp(httpServer: http.Server) {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
    path: "/websocket",
  });

  mainChannel(io);
}
