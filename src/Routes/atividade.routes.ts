import { Router } from "express";
import {
  criarAtividade,
  retornarAtividade,
} from "../controller/atividade.controllers";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json()

const routes = Router();

routes.post("/", jsonParser, criarAtividade);
routes.get("/:id", retornarAtividade);

export default routes;
