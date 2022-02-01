import { Request, Response } from "express";
import { gerarDocumentoService } from "../services/atividade.services";

export const gerarDocumento = async (req: Request, res: Response) => {
  const response = await gerarDocumentoService(req.params.id);

  if (response) {
    res.send(response);
  } else {
    res.status(500).json({ mensagem: "ERRO!" });
  }
};
