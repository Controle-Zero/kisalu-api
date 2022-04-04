import { Router } from "express";
import {
  avaliarPerformance,
  gerarDocumentoPDF,
  verDocumento,
} from "../controllers/atividade.controllers";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const atividadeRoutes = Router();

atividadeRoutes.get("/:id/docPDF", ensureAuthenticated, gerarDocumentoPDF);
atividadeRoutes.get("/:id/doc", verDocumento);
atividadeRoutes.put("/:id/:rate", ensureAuthenticated, avaliarPerformance);

export { atividadeRoutes };
