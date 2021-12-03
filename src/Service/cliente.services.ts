import prisma from "../database/uservices.database";
import Cliente from "../Model/cliente.models";

export function criarCliente(cliente: Cliente) {}

export function actualizarCliente(idClient: Number, cliente: Cliente) {}

export function retornarCliente(idCliente: Number) {}

export function apagarCliente(idCliente: Number) {}
