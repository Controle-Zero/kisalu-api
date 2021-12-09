import { Router } from "express";
import {
  criarCliente,
  retornarCliente,
  actualizarCliente,
  apagarCliente,
  autenticarCliente,
  refreshTokenCliente,
} from "../controllers/cliente.controllers";
import bodyParser from "body-parser";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const jsonParser = bodyParser.json();

const clienteRoutes = Router();

clienteRoutes.post("/", jsonParser, criarCliente);
clienteRoutes.post("/login", jsonParser, autenticarCliente);
clienteRoutes.post("/refresh-token", jsonParser, refreshTokenCliente);
clienteRoutes.put("/", ensureAuthenticated, jsonParser, actualizarCliente);
clienteRoutes.get("/", ensureAuthenticated, jsonParser, retornarCliente);
clienteRoutes.delete("/", jsonParser, apagarCliente);

export { clienteRoutes };
