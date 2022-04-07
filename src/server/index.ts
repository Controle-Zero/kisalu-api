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

const numCPUs = cpus.length;

if (cluster.isPrimary) {
  log.info(
    `Server (Primary) ${process.pid} is running on port ${process.env.PORT}`
  );

  const primaryHttpServer = http.createServer(app);

  setupMaster(primaryHttpServer, {
    loadBalancingMethod: "least-connection",
  });

  setupPrimary();

  cluster.setupPrimary({
    args: ["--use", "http"],
  });

  primaryHttpServer.listen(process.env.PORT || 8080);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    log.info(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  log.info(`Server (Worker) ${process.pid} is running`);

  const workerHttpServer = http.createServer(app);
  webSocketApp(workerHttpServer);
}
