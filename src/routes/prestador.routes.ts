import { Request, Response, Router } from "express";
import {
  criarPrestador,
  retornarPrestador,
  apagarPrestador,
  actualizarPrestador,
} from "../controllers/prestador.controllers";
import bodyParser from "body-parser";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const jsonParser = bodyParser.json();

const prestadorRoutes = Router();

prestadorRoutes.post("/", jsonParser, criarPrestador);
prestadorRoutes.get("/", ensureAuthenticated, jsonParser, retornarPrestador);
prestadorRoutes.put("/", ensureAuthenticated, jsonParser, actualizarPrestador);
prestadorRoutes.delete("/", ensureAuthenticated, jsonParser, apagarPrestador);

export { prestadorRoutes };
