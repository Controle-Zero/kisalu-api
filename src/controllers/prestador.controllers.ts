import { Response } from "express";
import CustomRequest from "../middleware/types/customRequest";
import Prestador from "../models/prestador.models";
import { adicionarCategoriasService } from "../services/prestador/adicionarCategorias";
import { autenticarPrestadorService } from "../services/prestador/autenticarPrestador";
import { retornarPrestadorService } from "../services/prestador/retornarPrestador";
import { actualizarPrestadorService } from "../services/prestador/actualizarPrestador";
import { criarPrestadorService } from "../services/prestador/criarPrestador";

export const criarPrestador = async (req: CustomRequest, res: Response) => {
  const prestador: Prestador = req.body;

  const response = await criarPrestadorService(prestador);

  if (response) {
    if (response.sucesso) {
      res.status(201).json(response);
    } else {
      res.status(400).json(response);
    }
  } else {
    res
      .status(400)
      .json({ mensagem: "Erro ao criar o prestador", sucesso: false });
  }
};

export const retornarPrestador = async (req: CustomRequest, res: Response) => {
  const prestador = await retornarPrestadorService(req.id);
  if (prestador) {
    res.status(200).json({ prestador, sucesso: true });
  } else {
    res
      .status(404)
      .json({ mensagem: "O prestador não foi encontrado", sucesso: false });
  }
};

export const actualizarPrestador = async (
  req: CustomRequest,
  res: Response
) => {
  const prestador: Prestador = req.body;
  const response = await actualizarPrestadorService(prestador);

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).json({
      mensagem: "Erro ao atualizar os dados do prestador",
      sucesso: false,
    });
  }
};

export const apagarPrestador = async (req: CustomRequest, res: Response) => {};

export const autenticarPrestador = async (
  req: CustomRequest,
  res: Response
) => {
  const { email, password, deviceData } = req.body;

  const token = await autenticarPrestadorService(email, password, deviceData);

  if (token) {
    res.status(200).json(token);
  } else {
    res.status(400).json({ mensagem: "Dados incorretos", sucesso: false });
  }
};

/*export const refreshTokenPrestador = async (
  req: CustomRequest,
  res: Response
) => {
  const { refreshToken } = req.body;

  const token = await refreshTokenPrestadorService(refreshToken);

  if (token) {
    res.status(200).json(token);
  } else {
    res
      .status(400)
      .json({ mensagem: "Refresh token inválido", sucesso: false });
  }
};*/

export const adicionarCategoriasProvedor = async (
  req: CustomRequest,
  res: Response
) => {
  const { idCategorias } = req.body;

  const response = await adicionarCategoriasService(req.id, idCategorias);

  if (response) {
    res.status(200).json(response);
  } else {
    res
      .status(400)
      .json({ mensagem: "Erro ao adicionar as categorias", sucesso: false });
  }
};
