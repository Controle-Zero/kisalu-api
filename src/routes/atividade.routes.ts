import { Router } from "express";
import { gerarDocumento } from "../controllers/atividade.controllers";

const atividadeRoutes = Router();

atividadeRoutes.get("/:id/documento", gerarDocumento);

export { atividadeRoutes };
