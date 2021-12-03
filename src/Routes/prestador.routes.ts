import { Request, Response, Router } from "express";
import {
  criarPrestador,
  retornarPrestador,
  apagarPrestador,
  actualizarPrestador,
} from "../controller/prestador.controllers";

const routes = Router();

routes.post("/", criarPrestador);
routes.get("/", retornarPrestador);
routes.put("/:id", actualizarPrestador);
routes.delete("/:id", apagarPrestador);

export default routes;
