import { Estados } from "@prisma/client";
import http from "http";
import { Server } from "socket.io";
import Client from "socket.io-client";
import { Events } from "../channels/atividade/events/types/events.types";
import {
  RequestPayload,
  ResponsePayload,
  Roles,
} from "../channels/atividade/interfaces/payload";
import { getRequestPayload, getResponsePayload } from "../mocks/events/handler";

describe("WebSockets Test", () => {
  let io, serverSocket, clientSocket, httpServer;

  beforeAll((done) => {
    httpServer = http.createServer();

    io = new Server(httpServer);

    httpServer.listen(8080, () => {
      clientSocket = Client(`http://localhost:8080`);

      io.on("connection", (socket) => {
        serverSocket = socket;
      });

      clientSocket.on("connect", done);
    });
  });

  afterAll(() => {
    io.close();
    clientSocket.close();
    httpServer.close();
  });

  test("Request Event", (done) => {
    clientSocket.on(Events.REQUEST, (payload: RequestPayload) => {
      expect(payload.TriggeredBy.role).toBe(Roles.CLIENTE);
      done();
    });
    serverSocket.emit(Events.REQUEST, getRequestPayload());
  });

  test("Response Event", (done) => {
    serverSocket.on(Events.RESPONSE, (payload: ResponsePayload) => {
      expect(payload.atividade.estado).toBe(Estados.ATIVA);
      done();
    });

    clientSocket.emit(Events.RESPONSE, getResponsePayload());
  });
});
