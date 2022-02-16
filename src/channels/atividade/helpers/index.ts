import { ResponseEventContext } from "../interfaces/responseEventContext";

export function handleSocketsArray(
  id: string,
  { socket, sockets }: ResponseEventContext
) {
  const idExiste = sockets.length > 0 ? sockets.find((f) => f[id]) : undefined;
  if (idExiste) {
    const index = sockets.findIndex((fi) => fi[id]);
    sockets[index][id] = socket.id;
  } else {
    sockets.push({ [id]: socket.id });
  }
}
