import { Router } from "express";
import {
  actualizarAtividade,
  criarAtividade,
} from "../controllers/atividade.controllers";
import bodyParser from "body-parser";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const jsonParser = bodyParser.json();

const atividadeRoutes = Router();

atividadeRoutes.all("/", ensureAuthenticated);
atividadeRoutes.post("/", jsonParser, criarAtividade);
atividadeRoutes.put("/", jsonParser, actualizarAtividade);

export { atividadeRoutes };
