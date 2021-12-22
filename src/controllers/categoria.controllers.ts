import { retornarCategoriasService } from "../services/categoria.services";
import e, { Request, Response } from "express";

export const retornarCategorias = async (req: Request, res: Response) => {
  const response = await retornarCategoriasService();

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).json({ mensagem: "Erro ao retornar as categorias" });
  }
};
