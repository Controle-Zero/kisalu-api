import app from "./app";
import { log } from "./log";
import http from "http"

const server = http.createServer(app);

server.listen(process.env.PORT || 8080, () => {
  log.info(`RODANDO NA PORTA ${process.env.PORT ? process.env.PORT : 8080}...`);
});
