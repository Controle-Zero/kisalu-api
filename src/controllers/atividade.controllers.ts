import { Request, Response } from "express";
import { gerarDocumentoService } from "../services/atividade/gerarDocumento";
import pdf from "html-pdf";
import { log } from "../libs/log";
import { rateAtividade } from "../services/atividade/rateAtividade";

export const gerarDocumentoPDF = async (req: Request, res: Response) => {
  const response = await gerarDocumentoService(req.params.id);

  if (response) {
    pdf.create(response, { format: "Letter" }).toBuffer((err, buffer) => {
      if (err) {
        log.error(`${err}- An error occured creating the PDF`);
        return res
          .status(500)
          .json({ message: "An error occured creating the document" });
      }
      return res.end(buffer);
    });
  } else {
    res.status(500).json({ message: "An error occured creating the document" });
  }
};

export const verDocumento = async (req: Request, res: Response) => {
  const response = await gerarDocumentoService(req.params.id);

  if (response) {
    res.status(200).send(response);
  } else {
    res.status(500).json({ message: "An error occured loading the document" });
  }
};

export const avaliarPerformance = async (req: Request, res: Response) => {
  const response = await rateAtividade(req.params.id, +req.params.rate);

  if (response) {
    res.status(200).send(response);
  } else {
    res.status(400).json({ message: "An error occured rating the activity" });
  }
};
