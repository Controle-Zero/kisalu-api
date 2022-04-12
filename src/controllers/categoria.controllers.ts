import { retornarCategoriasService } from "../services/categoria/retornarCategorias";
import { Request, Response } from "express";
import { criarCategoriaService } from "../services/categoria/criarCategoria";
import Categoria from "../models/categoria.models";

export const criarCategoria = async (req: Request, res: Response) => {
  const categoria: Categoria = req.body;
  const response = await criarCategoriaService(categoria);

  if (response) {
    res.status(200).json({ message: "Category created" });
  } else {
    res.status(400).json({ message: "An error occured creating the category" });
  }
};

export const retornarCategorias = async (req: Request, res: Response) => {
  const response = await retornarCategoriasService();

  if (response) {
    res.status(200).json({ categorias: response, success: true });
  } else {
    res
      .status(400)
      .json({
        message: "An error occured returning the categories",
        success: false,
      });
  }
};
