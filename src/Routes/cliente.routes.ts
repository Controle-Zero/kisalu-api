import { Router } from "express";
import {
  criarCliente,
  retornarCliente,
  actualizarCliente,
  apagarCliente,
} from "../controller/cliente.controllers";

const routes = Router();

routes.post("/", criarCliente);
routes.put("/:id", actualizarCliente);
routes.get("/:id", retornarCliente);
routes.delete("/:id", apagarCliente);
