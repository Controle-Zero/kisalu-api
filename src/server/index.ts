import app from "../apps/http";
import { log } from "../libs/log";
import http from "http";
import dotenv from "dotenv";
import { initMongoDB } from "../libs/configs/mongodb";
import webSocketApp from "../apps/websocket";

dotenv.config();
//initMongoDB();

const httpServer = http.createServer(app);

webSocketApp(httpServer);

httpServer.listen(process.env.PORT, () => {
  log.info("Server is running");
});
