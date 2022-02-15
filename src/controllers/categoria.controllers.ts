import { retornarCategoriasService } from "../services/categoria/retornarCategorias";
import { Request, Response } from "express";
import { criarCategoriaService } from "../services/categoria/criarCategoria";
import Categoria from "../models/categoria.model";

export const criarCategoria = async (req: Request, res: Response) => {
  const categoria: Categoria = req.body;
  const response = await criarCategoriaService(categoria);

  if (response) {
    res.status(200).json({ mensagem: "Categoria criada" });
  } else {
    res.status(400).json({ mensagem: "Erro ao criar a categoria" });
  }
};

export const retornarCategorias = async (req: Request, res: Response) => {
  const response = await retornarCategoriasService();

  if (response) {
    res.status(200).json({ categorias: response, sucesso: true });
  } else {
    res
      .status(400)
      .json({ mensagem: "Erro ao retornar as categorias", sucesso: false });
  }
};
