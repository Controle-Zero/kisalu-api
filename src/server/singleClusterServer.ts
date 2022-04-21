import app from "../apps/http";
import { initMongoDB } from "../libs/configs/mongodb";
import { log } from "../libs/log";
import http from "http";
import { singleServerWebSocket } from "../apps/websocket";

initMongoDB();
const httpServer = http.createServer(app);

singleServerWebSocket(httpServer);

httpServer.listen(8080, async () => {
  log.info("App is running on a single cluster");
});
