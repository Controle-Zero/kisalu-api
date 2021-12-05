import { Request, response, Response } from "express";
import Cliente from "../models/cliente.models";
import {
  autenticarClienteService,
  criarClienteService,
  retornarClienteService,
} from "../services/cliente.services";

export const criarCliente = async (req: Request, res: Response) => {
  const cliente: Cliente = req.body;
  const response = await criarClienteService(cliente);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).json({ mensagem: "Erro ao criar o cliente" });
  }
};

export const retornarCliente = async (req: Request, res: Response) => {
  const { email } = req.body;

  const cliente = await retornarClienteService(email);
  if (cliente) {
    res.status(200).json(cliente);
  } else {
    res.status(404).json({ mensagem: "Cliente não encontrado" });
  }
};

export const actualizarCliente = async (req: Request, res: Response) => {};

export const apagarCliente = async (req: Request, res: Response) => {};

export const autenticarCliente = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await autenticarClienteService(email, password);
  res.json(token);
};
