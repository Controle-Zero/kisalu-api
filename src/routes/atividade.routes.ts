import { Router } from "express";
import {
  avaliarPerformance,
  gerarDocumentoPDF,
  verDocumento,
} from "../controllers/atividade.controllers";
import checkAuthenticatedToken from "../middleware/checkAuthenticatedToken";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const atividadeRoutes = Router();

atividadeRoutes.get(
  "/:id/docPDF",
  ensureAuthenticated,
  checkAuthenticatedToken,
  gerarDocumentoPDF
);
atividadeRoutes.get("/:id/doc", verDocumento);
atividadeRoutes.put(
  "/:id/:rate",
  ensureAuthenticated,
  checkAuthenticatedToken,
  avaliarPerformance
);

export { atividadeRoutes };
