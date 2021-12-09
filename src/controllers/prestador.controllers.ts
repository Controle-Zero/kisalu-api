import { Request, Response } from "express";
import Prestador from "../models/prestador.models";
import { criarPrestadorService } from "../services/prestador.services";

export const criarPrestador = async (req: Request, res: Response) => {
  const prestador: Prestador = req.body;

  const response = await criarPrestadorService(prestador);

  if (response) {
    res.status(201).json(response);
  } else {
    res.status(400).json({ mensagem: "Erro ao criar o prestador" });
  }
};

export const retornarPrestador = async (req: Request, res: Response) => {};

export const actualizarPrestador = async (req: Request, res: Response) => {};

export const apagarPrestador = async (req: Request, res: Response) => {};
