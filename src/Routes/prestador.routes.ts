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
routes.get("/", jsonParser, retornarPrestador);
routes.put("/", jsonParser, actualizarPrestador);
routes.delete("/", jsonParser, apagarPrestador);

export default routes;
