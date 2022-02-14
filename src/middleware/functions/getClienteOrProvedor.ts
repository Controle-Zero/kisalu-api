import db from "../../database/uservices.database";

export default async function getClienteOrProvedor(ID: string) {
  const cliente = await db.cliente.findUnique({
    where: {
      id: ID,
    },
  });

  if (cliente) {
    return cliente;
  } else {
    const prestador = await db.prestador.findUnique({
      where: {
        id: ID,
      },
    });

    return prestador;
  }
}
