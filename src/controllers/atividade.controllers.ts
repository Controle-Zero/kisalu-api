import { Request, Response } from "express";
import { gerarDocumentoService } from "../services/atividade.services";
import puppetter from "puppeteer";
import dotenv from "dotenv";

dotenv.config();

export const gerarDocumentoPDF = async (req: Request, res: Response) => {
  const response = await gerarDocumentoService(req.params.id);

  if (response) {
    const browser = await puppetter.launch();
    const page = await browser.newPage();

    await page.goto(`${process.env.APP_URL}atividade/${req.params.id}/fatura`, {
      waitUntil: "networkidle0",
    });

    const pdf = await page.pdf({
      printBackground: true,
      format: "letter",
    });

    await browser.close();

    res.contentType("application/pdf");

    res.status(200).send(pdf);
  } else {
    res.status(500).json({ mensagem: "Erro ao gerar o arquivo!" });
  }
};

export const verDocumento = async (req: Request, res: Response) => {
  const response = await gerarDocumentoService(req.params.id);

  if (response) {
    res.status(200).send(response);
  } else {
    res.status(500).json({ mensagem: "Erro ao exibir a factura" });
  }
};
