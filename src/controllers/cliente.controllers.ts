import { Response } from "express";
import CustomRequest from "../middleware/models/customRequest.models";
import Cliente from "../models/cliente.models";
import {
  actualizarClienteService,
  autenticarClienteService,
  criarClienteService,
  refreshTokenClienteService,
  retornarClienteService,
} from "../services/cliente.services";

export const criarCliente = async (req: CustomRequest, res: Response) => {
  const cliente: Cliente = req.body;
  const response = await criarClienteService(cliente);
  if (response) {
    res.status(201).json(response);
  } else {
    res
      .status(400)
      .json({ mensagem: "Erro ao criar o cliente", sucesso: false });
  }
};

export const retornarCliente = async (req: CustomRequest, res: Response) => {
  const cliente = await retornarClienteService(req.id);
  if (cliente) {
    res.status(200).json({ cliente, sucesso: true });
  } else {
    res
      .status(404)
      .json({ mensagem: "O cliente não foi encontrado", sucesso: false });
  }
};

export const actualizarCliente = async (req: CustomRequest, res: Response) => {
  const cliente = req.body;
  const response = await actualizarClienteService(cliente);

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).json({
      mensagem: "Erro ao atualizar os dados do cliente",
      sucesso: false,
    });
  }
};

export const apagarCliente = async (req: CustomRequest, res: Response) => {};

export const autenticarCliente = async (req: CustomRequest, res: Response) => {
  const { email, password } = req.body;

  const token = await autenticarClienteService(email, password);

  if (token) {
    res.status(200).json(token);
  } else {
    res.status(400).json({ mensagem: "Dados incorretos", sucesso: false });
  }
};

export const refreshTokenCliente = async (
  req: CustomRequest,
  res: Response
) => {
  const { refreshToken } = req.body;

  const token = await refreshTokenClienteService(refreshToken);

  if (token) {
    res.status(200).json(token);
  } else {
    res
      .status(400)
      .json({ mensagem: "Refresh token inválido", sucesso: false });
  }
};
