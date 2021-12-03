import { Router } from "express";
import {
  criarCliente,
  retornarCliente,
  actualizarCliente,
  apagarCliente,
} from "../controller/cliente.controllers";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json();

const routes = Router();

routes.post("/", jsonParser, criarCliente);
routes.put("/", jsonParser, actualizarCliente);
routes.get("/", jsonParser, retornarCliente);
routes.delete("/", jsonParser, apagarCliente);

export default routes;
