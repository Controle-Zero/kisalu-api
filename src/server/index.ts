import app from "../app";
import { log } from "../log";
import http from "http";
import { Server } from "socket.io";
import { atividadeChannel } from "../channels/atividade.channels";

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
  path: "/websocket",
});

atividadeChannel(io);

httpServer.listen(process.env.PORT || 8080, () => {
  log.info(`RODANDO NA PORTA ${process.env.PORT ? process.env.PORT : 8080}...`);
});
