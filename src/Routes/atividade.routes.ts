import { Router } from "express";
import {
  criarAtividade,
  retornarAtividade,
} from "../controllers/atividade.controllers";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json()

const routes = Router();

routes.post("/", jsonParser, criarAtividade);
routes.get("/", jsonParser, retornarAtividade);

export default routes;
