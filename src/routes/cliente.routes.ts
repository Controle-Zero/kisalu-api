import { Router } from "express";
import {
  criarCliente,
  retornarCliente,
  actualizarCliente,
  apagarCliente,
  autenticarCliente,
} from "../controllers/cliente.controllers";
import bodyParser from "body-parser";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import checkAuthenticatedToken from "../middleware/checkAuthenticatedToken";
import detectDevice from "../middleware/detectDevice";

const jsonParser = bodyParser.json();

const clienteRoutes = Router();

clienteRoutes.post("/", jsonParser, criarCliente);
clienteRoutes.post("/login", detectDevice, jsonParser, autenticarCliente);
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
  jsonParser,
  retornarCliente
);
clienteRoutes.delete("/", jsonParser, apagarCliente);

export { clienteRoutes };
