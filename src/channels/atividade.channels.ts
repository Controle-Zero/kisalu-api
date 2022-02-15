import { Server, Socket } from "socket.io";
import { log } from "../libs/log";
import Atividade from "../models/atividade.models";
import { atividadeService } from "../services/atividade/atividadeService";
import { retornarClienteService } from "../services/cliente/retornarClienteService";

interface CustomSocket extends Socket {
  idCliente: string;
  idProvedor: string;
}

//Real time interaction (notification system)
export async function atividadeChannel(io: Server) {
  let sockets: { [key: string]: string }[] = [];

  io.of("atividadeNsp").on("connection", (socket: CustomSocket) => {
    log.info(`Socket ${socket.id} connected`);
    const { idCliente, idProvedor } = socket.handshake.auth;
    if (idCliente && idProvedor) {
      const clienteExiste =
        sockets.length > 0 ? sockets.find((f) => f[idCliente]) : undefined;
      if (clienteExiste) {
        const index = sockets.findIndex((fi) => fi[idCliente]);
        sockets[index][idCliente] = socket.id;
      } else {
        sockets.push({ [idCliente]: socket.id });
      }

      socket.on(`request:${idProvedor}`, (atividade: Atividade) => {
        log.info("Request event");
        const atividadeDB = atividadeService(atividade);

        const payload = {
          cliente: retornarClienteService(atividade.clienteId),
          categoria: atividade.categoriaId,
          atividadeDB,
        };

        io.emit(`request:${idProvedor}`, payload);
      });
    } else {
      socket.on(`response`, (atividade: Atividade) => {
        log.info("Response event");
        atividadeService(atividade);
        const to =
          sockets.length > 0
            ? sockets.find((f) => f[atividade.cliente.id])[
                atividade.categoria.id
              ]
            : "";
        log.info(to);
        socket.to(to).emit(`response`, atividade);
      });
    }
  });
}
