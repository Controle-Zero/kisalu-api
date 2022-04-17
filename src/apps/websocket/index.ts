import { Server } from "socket.io";
import { mainChannel } from "../../channels/handler";
import http from "http";
import { createAdapter as createClusterAdapter } from "@socket.io/cluster-adapter";
import { createAdapter as createRedisAdapter } from "@socket.io/redis-adapter";
import { setupWorker } from "@socket.io/sticky";
import redisConfig from "../../libs/configs/redis";

export default function webSocketApp(httpServer: http.Server) {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
    path: "/websocket",
  });

  const pubClient = redisConfig;
  const subClient = pubClient.duplicate();

  io.adapter(createRedisAdapter(pubClient, subClient));

  io.adapter(createClusterAdapter());

  setupWorker(io);

  mainChannel(io);
}
