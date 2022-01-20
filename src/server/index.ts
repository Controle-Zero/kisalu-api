import app from "../apps/httpApp";
import { log } from "../log";
import http from "http";
import dotenv from "dotenv";
import webSocketApp from "../apps/webSocketApp";

dotenv.config();

const httpServer = http.createServer(app);
webSocketApp(httpServer);

httpServer.listen(process.env.PORT || 8080, () => {
  log.info(`RODANDO NA PORTA ${process.env.PORT ? process.env.PORT : 8080}...`);
});
