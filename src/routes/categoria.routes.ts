import bodyParser, { json } from "body-parser";
import { Router } from "express";
import {
  criarCategoria,
  retornarCategorias,
} from "../controllers/categoria.controllers";

const categoriaRoutes = Router();
const jsonParser = bodyParser.json();

categoriaRoutes.get("/", retornarCategorias);
categoriaRoutes.post("/", jsonParser, criarCategoria);

export { categoriaRoutes };
