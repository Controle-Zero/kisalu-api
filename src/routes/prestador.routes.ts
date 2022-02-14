import { Request, Response, Router } from "express";
import {
  criarPrestador,
  retornarPrestador,
  apagarPrestador,
  actualizarPrestador,
  autenticarPrestador,
  adicionarCategoriasProvedor,
} from "../controllers/prestador.controllers";
import bodyParser from "body-parser";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import checkAuthenticatedToken from "../middleware/checkAuthenticatedToken";

const jsonParser = bodyParser.json();

const prestadorRoutes = Router();

prestadorRoutes.post("/", jsonParser, criarPrestador);
prestadorRoutes.post("/login", jsonParser, autenticarPrestador);
//prestadorRoutes.post("/refresh-token", jsonParser, refreshTokenPrestador);
prestadorRoutes.get(
  "/",
  ensureAuthenticated,
  checkAuthenticatedToken,
  jsonParser,
  retornarPrestador
);
prestadorRoutes.put(
  "/",
  ensureAuthenticated,
  checkAuthenticatedToken,
  jsonParser,
  actualizarPrestador
);
prestadorRoutes.delete(
  "/",
  ensureAuthenticated,
  checkAuthenticatedToken,
  jsonParser,
  apagarPrestador
);
prestadorRoutes.put(
  "/categorias",
  ensureAuthenticated,
  checkAuthenticatedToken,
  jsonParser,
  adicionarCategoriasProvedor
);

export { prestadorRoutes };
