import { Request, response, Response } from "express";
import Cliente from "../models/cliente.models";
import {
  criarClienteService,
  retornarClienteService,
} from "../services/cliente.services";

export const criarCliente = async (req: Request, res: Response) => {
  const cliente: Cliente = req.body;
  const response = await criarClienteService(cliente);
  res.json(response);
};

export const retornarCliente = async (req: Request, res: Response) => {
  const email = req.body;

  try {
    const cliente = await retornarClienteService(email.email);
    res.status(200).json(cliente);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export const actualizarCliente = async (req: Request, res: Response) => {};

export const apagarCliente = async (req: Request, res: Response) => {};
