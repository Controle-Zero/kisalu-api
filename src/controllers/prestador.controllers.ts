import { Request, Response } from "express";
import Prestador from "../models/prestador.models";
import {
  criarPrestadorService,
  actualizarPrestadorService,
  retornarPrestadorService,
  autenticarPrestadorService,
  refreshTokenPrestadorService,
} from "../services/prestador.services";

export const criarPrestador = async (req: Request, res: Response) => {
  const prestador: Prestador = req.body;

  const response = await criarPrestadorService(prestador);

  if (response) {
    res.status(201).json(response);
  } else {
    res.status(400).json({ mensagem: "Erro ao criar o prestador", sucesso : false });
  }
};

export const retornarPrestador = async (req: Request, res: Response) => {
  const { email } = req.body;

  const prestador = await retornarPrestadorService(email);
  if (prestador) {
    res.status(200).json({prestador, sucesso : true});
  } else {
    res.status(404).json({ mensagem: "O prestador não foi encontrado", sucesso : false});
  }
};

export const actualizarPrestador = async (req: Request, res: Response) => {
  const prestador: Prestador = req.body;
  const response = await actualizarPrestadorService(prestador);

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).json({mensagem : "Erro ao atualizar os dados do prestador", sucesso : false});
  }
};

export const apagarPrestador = async (req: Request, res: Response) => {};

export const autenticarPrestador = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await autenticarPrestadorService(email, password);

  if (token) {
    res.status(200).json(token);
  } else {
    res.status(400).json({ mensagem: "Dados incorretos", sucesso : false});
  }
};

export const refreshTokenPrestador = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  const token = await refreshTokenPrestadorService(refreshToken);

  if (token) {
    res.status(200).json(token);
  } else {
    res.status(400).json({ mensagem: "Refresh token inválido", sucesso : false });
  }
};
