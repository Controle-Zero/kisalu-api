import { Router } from "express";
import {
  avaliarPerformance,
  gerarDocumentoPDF,
  verDocumento,
} from "../controllers/atividade.controllers";

const atividadeRoutes = Router();

atividadeRoutes.get("/:id/docPDF", gerarDocumentoPDF);
atividadeRoutes.get("/:id/doc", verDocumento);
atividadeRoutes.put("/:id/:rate", avaliarPerformance);

export { atividadeRoutes };
