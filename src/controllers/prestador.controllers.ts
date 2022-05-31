import { Response } from "express";
import CustomRequest from "../middleware/types/customRequest";
import Prestador from "../models/prestador.models";
import { adicionarCategoriasService } from "../services/prestador/adicionarCategorias";
import { autenticarPrestadorService } from "../services/prestador/autenticarPrestador";
import { retornarPrestadorService } from "../services/prestador/retornarPrestador";
import { actualizarPrestadorService } from "../services/prestador/actualizarPrestador";
import { criarPrestadorService } from "../services/prestador/criarPrestador";
import { removerCategoria } from "../services/prestador/removerCategoria";
import retornarAtividadesService from "../services/prestador/retornarAtividades";
import retornarPortifolioService from "../services/prestador/retornarPortifolio";
import criarPostService from "../services/prestador/criarPost";
import { log } from "../libs/log";

export const criarPrestador = async (req: CustomRequest, res: Response) => {
  const prestador: Prestador = req.body;

  const response = await criarPrestadorService(prestador);

  if (response) {
    if (response.success) {
      res.status(201).json(response);
    } else {
      res.status(400).json(response);
    }
  } else {
    res
      .status(400)
      .json({ message: "Error creating the provider", success: false });
  }
};

export const retornarPrestador = async (req: CustomRequest, res: Response) => {
  const prestador = await retornarPrestadorService(req.id);
  if (prestador) {
    res.status(200).json({ prestador, success: true });
  } else {
    res.status(404).json({ message: "Provider wasn't found", success: false });
  }
};

export const actualizarPrestador = async (
  req: CustomRequest,
  res: Response
) => {
  const prestador: Prestador = req.body;
  const response = await actualizarPrestadorService(req.id, prestador);

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).json({
      message: "An error occured updating the provider",
      success: false,
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
    res.status(400).json({ message: "Incorrect data", success: false });
  }
};

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
      .json({ message: "An error occured adding categories", success: false });
  }
};

export const removerCategoriaProvedor = async (
  req: CustomRequest,
  res: Response
) => {
  const { idCategoria } = req.body;

  const response = await removerCategoria(req.id, idCategoria);

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).json({
      message: "An error occured removing the selected category",
      success: false,
    });
  }
};

export const retornarAtividades = async (req: CustomRequest, res: Response) => {
  const response = await retornarAtividadesService(req.id);

  if (response) {
    res.status(200).json(response);
  } else {
    res
      .status(400)
      .json({ message: "An error occurred while getting the activities" });
  }
};

export const criarPost = async (req: CustomRequest, res: Response) => {
  const response = await criarPostService(req.id, req.body);

  if (response) {
    res.status(201).json(response);
  } else {
    res.status(400).json({
      message: "An error Occureed while creating the post",
      success: false,
    });
  }
};

export const retornarPortifolio = async (req: CustomRequest, res: Response) => {
  const response = await retornarPortifolioService(req.id);

  if (response) {
    res.status(200).json(response);
  } else {
    res
      .status(400)
      .json({ message: "An error occurred while getting the portifolio" });
  }
};
