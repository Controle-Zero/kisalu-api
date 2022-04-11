import app from "../apps/httpApp";
import { log } from "../libs/log";
import http from "http";
import dotenv from "dotenv";
import webSocketApp from "../apps/webSocketApp";
import cluster from "cluster";
import { cpus } from "os";
import { setupMaster } from "@socket.io/sticky";
import { setupPrimary } from "@socket.io/cluster-adapter";

dotenv.config();

const httpServer = http.createServer(app);

if (cluster.isPrimary) {
  const numCPUs = cpus().length;

  setupMaster(httpServer, {
    loadBalancingMethod: "least-connection",
  });

  setupPrimary();

  cluster.setupPrimary({
    serialization: "advanced",
  });

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    log.info(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  log.info(`Worker ${process.pid} started`);

  webSocketApp(httpServer);
  httpServer.listen(process.env.PORT || 8080);
}