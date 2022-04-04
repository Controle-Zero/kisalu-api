import bodyParser, { json } from "body-parser";
import { Router } from "express";
import {
  criarCategoria,
  retornarCategorias,
} from "../controllers/categoria.controllers";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const categoriaRoutes = Router();
const jsonParser = bodyParser.json();

categoriaRoutes.get("/", ensureAuthenticated, retornarCategorias);
categoriaRoutes.post("/", jsonParser, criarCategoria);

export { categoriaRoutes };
