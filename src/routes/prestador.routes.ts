import { Router } from "express";
import {
  criarPrestador,
  retornarPrestador,
  apagarPrestador,
  actualizarPrestador,
  autenticarPrestador,
  adicionarCategoriasProvedor,
  removerCategoriaProvedor,
  retornarAtividades,
  criarPost,
  retornarPortifolio,
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
prestadorRoutes.delete(
  "/categorias",
  ensureAuthenticated,
  checkAuthenticatedToken,
  jsonParser,
  removerCategoriaProvedor
);

prestadorRoutes.get(
  "/atividades",
  ensureAuthenticated,
  checkAuthenticatedToken,
  retornarAtividades
);

prestadorRoutes.post(
  "/post",
  ensureAuthenticated,
  checkAuthenticatedToken,
  jsonParser,
  criarPost
);

prestadorRoutes.get(
  "/portifolio",
  ensureAuthenticated,
  checkAuthenticatedToken,
  retornarPortifolio
);

export { prestadorRoutes };
