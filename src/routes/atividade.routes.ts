import { Router } from "express";
import {
  actualizarAtividade,
  criarAtividade,
} from "../controllers/atividade.controllers";
import bodyParser from "body-parser";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const jsonParser = bodyParser.json();

const routes = Router();

routes.all("/", ensureAuthenticated);
routes.post("/", jsonParser, criarAtividade);
routes.put("/", jsonParser, actualizarAtividade);

export default routes;
