import app from "../apps/http";
import { log } from "../libs/log";
import http from "http";
import dotenv from "dotenv";
import { initMongoDB } from "../libs/configs/mongodb";
import webSocketApp from "../apps/websocket";

dotenv.config();
initMongoDB();

initMongoDB();
const httpServer = http.createServer(app);

webSocketApp(httpServer);

httpServer.listen(8080, async () => {
  log.info("App is running on a single cluster");
});
