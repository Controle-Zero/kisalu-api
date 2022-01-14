import { Server, Socket } from "socket.io";
import { log } from "../log";
import Atividade from "../models/atividade.models";
import { atividadeService } from "../services/atividade.services";
import { retornarClienteService } from "../services/cliente.services";

interface CustomSocket extends Socket {
  idCliente: string;
  idProvedor: string;
}

export async function atividadeChannel(io: Server) {
  io.of("atividadeNsp").on("connection", (socket: CustomSocket) => {
    log.info(`Socket ${socket.id} connected`);
    const { idCliente, idProvedor } = socket.handshake.auth;
    socket.on(
      `atividade:${idCliente}/${idProvedor}`,
      (atividade: Atividade) => {
        log.info(atividade);
        atividadeService(atividade);

        const payload = {
          cliente: retornarClienteService(atividade.idCliente),
          categoria: atividade.idCategoria,
        };

        io.emit(`atividade:${idCliente}/${idProvedor}`, payload);
      }
    );
  });
}
