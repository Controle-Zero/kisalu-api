import { Router } from "express";
import {
  criarCliente,
  retornarCliente,
  actualizarCliente,
  apagarCliente,
  autenticarCliente,
  retornarAtividades,
} from "../controllers/cliente.controllers";
import bodyParser from "body-parser";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import checkAuthenticatedToken from "../middleware/checkAuthenticatedToken";

const jsonParser = bodyParser.json();

const clienteRoutes = Router();

clienteRoutes.post("/", jsonParser, criarCliente);
clienteRoutes.post("/login", jsonParser, autenticarCliente);
//clienteRoutes.post("/refresh-token", jsonParser, refreshTokenCliente);
clienteRoutes.put(
  "/",
  ensureAuthenticated,
  checkAuthenticatedToken,
  jsonParser,
  actualizarCliente
);
clienteRoutes.get(
  "/",
  ensureAuthenticated,
  checkAuthenticatedToken,
  retornarCliente
);
clienteRoutes.delete("/", jsonParser, apagarCliente);
clienteRoutes.get(
  "/atividades",
  ensureAuthenticated,
  checkAuthenticatedToken,
  retornarAtividades
);

export { clienteRoutes };
