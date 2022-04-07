import app from "../apps/httpApp";
import { log } from "../libs/log";
import http from "http";
import dotenv from "dotenv";
import webSocketApp from "../apps/webSocketApp";
import cluster from "cluster";
import { cpus } from "os";

dotenv.config();

const numCPUs = cpus().length;

const httpServer = http.createServer(app);

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    log.info(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  httpServer.listen(process.env.PORT || 8080, () => {
    log.info(
      `Server ${process.pid} is running on port ${process.env.PORT || 8080}`
    );
  });

  webSocketApp(httpServer);
}
