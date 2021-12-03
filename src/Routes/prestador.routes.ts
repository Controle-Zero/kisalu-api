import { Request, Response, Router } from "express";
import {
  criarPrestador,
  retornarPrestador,
  apagarPrestador,
  actualizarPrestador,
} from "../controller/prestador.controllers";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json()

const routes = Router();

routes.post("/", jsonParser, criarPrestador);
routes.get("/", retornarPrestador);
routes.put("/:id", actualizarPrestador);
routes.delete("/:id", apagarPrestador);

export default routes;
