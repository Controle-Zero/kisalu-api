import { Request, Response } from "express";
import Prestador from "../models/prestador.models";
import {
  criarPrestadorService,
  actualizarPrestadorService,
  retornarPrestadorService,
} from "../services/prestador.services";

export const criarPrestador = async (req: Request, res: Response) => {
  const prestador: Prestador = req.body;

  const response = await criarPrestadorService(prestador);

  if (response) {
    res.status(201).json(response);
  } else {
    res.status(400).json({ mensagem: "Erro ao criar o prestador" });
  }
};

export const retornarPrestador = async (req: Request, res: Response) => {
  const { email } = req.body;

  const prestador = await retornarPrestadorService(email);
  if (prestador) {
    res.status(200).json(prestador);
  } else {
    res.status(404).json({ mensagem: "O prestador não foi encontrado" });
  }
};

export const actualizarPrestador = async (req: Request, res: Response) => {
  const prestador: Prestador = req.body;
  const response = await actualizarPrestadorService(prestador);

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).json("Erro ao atualizar os dados do prestador");
  }
};

export const apagarPrestador = async (req: Request, res: Response) => {};
