import { Router } from "express";
import {
  criarAtividade,
  retornarAtividade,
} from "../controller/atividade.controllers";

const routes = Router();

routes.post("/", criarAtividade);
routes.get("/:id", retornarAtividade);

export default routes;
