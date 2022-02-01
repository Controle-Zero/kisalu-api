import {Request, Response} from "express";
import { gerarDocumentoService } from "../services/atividade.services";

export const gerarDocumento = async (req: Request, res: Response) => {
    const response = gerarDocumentoService(req.params.id);
} 