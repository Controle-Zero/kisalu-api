import bodyParser from "body-parser";
import { Router } from "express";
import {
  criarCategoria,
  retornarCategorias,
} from "../controllers/categoria.controllers";
import checkAuthenticatedToken from "../middleware/checkAuthenticatedToken";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const categoriaRoutes = Router();
const jsonParser = bodyParser.json();

categoriaRoutes.get(
  "/",
  ensureAuthenticated,
  checkAuthenticatedToken,
  retornarCategorias
);
categoriaRoutes.post("/", jsonParser, criarCategoria);

export { categoriaRoutes };
