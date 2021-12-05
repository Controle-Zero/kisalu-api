import { Router } from "express";
import {
  criarCliente,
  retornarCliente,
  actualizarCliente,
  apagarCliente,
  autenticarCliente,
} from "../controllers/cliente.controllers";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json();

const routes = Router();

routes.post("/", jsonParser, criarCliente);
routes.post("/login", jsonParser, autenticarCliente);
routes.put("/", jsonParser, actualizarCliente);
routes.get("/", jsonParser, retornarCliente);
routes.delete("/", jsonParser, apagarCliente);

export default routes;
