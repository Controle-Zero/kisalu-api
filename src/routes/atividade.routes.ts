import { Router } from "express";
import { gerarDocumento } from "../controllers/atividade.controllers";

const atividadeRoutes = Router();

atividadeRoutes.get("/:id/gerarDocumento", gerarDocumento);

export { atividadeRoutes };
