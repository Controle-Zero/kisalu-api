import { Server, Socket } from "socket.io";
import { log } from "../libs/log";
import Atividade from "../models/atividade.models";
import Categoria from "../models/categoria.model";
import Cliente from "../models/cliente.models";
import { criarAtividadeService } from "../services/atividade/criarAtividadeService";
import { updateAtividadeService } from "../services/atividade/updateAtividadeService";
import { retornarClienteService } from "../services/cliente/retornarClienteService";

interface CustomSocket extends Socket {
  idCliente: string;
  idProvedor: string;
}

interface AtividadePayload {
  id: string;
  dataCriado: Date;
  dataFinalizado: Date;
  valorAssociado: number;
  numRef: number;
  estado: string;
  Categoria: Omit<Categoria, "imageUrl">;
  Cliente: Omit<Cliente, "password" | "token" | "atividades">;
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
        const atividadeDB = criarAtividadeService(atividade);

        const payload = {
          cliente: retornarClienteService(atividade.clienteId),
          categoria: atividade.categoriaId,
          atividadeDB,
        };

        io.emit(`request:${idProvedor}`, payload);
      });
    } else {
      socket.on(`response`, (atividade: AtividadePayload) => {
        log.info(`Response event, payload- ${JSON.stringify(atividade)}`);
        updateAtividadeService(atividade);
        const to =
          sockets.length > 0
            ? sockets.find((f) => f[atividade.Cliente.id])[
                atividade.Categoria.id
              ]
            : "";
        if (to) {
          log.info(to);
          socket.to(to).emit(`response`, atividade);
        }
      });
    }
  });
}
