import { Router } from "express";
import {
  gerarDocumentoPDF,
  verDocumento,
} from "../controllers/atividade.controllers";

const atividadeRoutes = Router();

atividadeRoutes.get("/:id/docPDF", gerarDocumentoPDF);
atividadeRoutes.get("/:id/doc", verDocumento);

export { atividadeRoutes };
