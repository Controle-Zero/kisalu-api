import { Router } from "express";
import { retornarCategorias } from "../controllers/categoria.controllers";

const categoriaRoutes = Router();

categoriaRoutes.get("/", retornarCategorias);

export { categoriaRoutes };
