import { Request, Response } from "express";
import { gerarDocumentoService } from "../services/atividade.services";
import pdf from "html-pdf";
import { log } from "../libs/log";

export const gerarDocumentoPDF = async (req: Request, res: Response) => {
  const response = await gerarDocumentoService(req.params.id);

  if (response) {
    pdf.create(response, { format: "Letter" }).toBuffer((err, buffer) => {
      if (err) {
        log.error(`${err}- Erro ao criar o arquivo PDF`);
        return res
          .status(500)
          .json({ mensagem: "Ocorreu um erro ao criar o documento" });
      }
      return res.end(buffer);
    });
  } else {
    res.status(500).json({ mensagem: "Erro ao gerar o arquivo!" });
  }
};

export const verDocumento = async (req: Request, res: Response) => {
  const response = await gerarDocumentoService(req.params.id);

  if (response) {
    res.status(200).send(response);
  } else {
    res.status(500).json({ mensagem: "Erro ao exibir o documento" });
  }
};
