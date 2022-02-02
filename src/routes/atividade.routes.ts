import { Router } from "express";
import {
  gerarDocumentoPDF,
  verDocumento,
} from "../controllers/atividade.controllers";

const atividadeRoutes = Router();

atividadeRoutes.get("/:id/faturaPDF", gerarDocumentoPDF);
atividadeRoutes.get("/:id/fatura", verDocumento);

export { atividadeRoutes };
