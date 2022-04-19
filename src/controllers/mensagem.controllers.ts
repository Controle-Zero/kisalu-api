import { Response } from "express";
import CustomRequest from "../middleware/types/customRequest";
import retornarMensagens from "../services/chat/retornarMensagens";


export const getMensagens = async (req: CustomRequest, res: Response) => {
  const { clienteId, prestadorId } = req.body;
  const response = await retornarMensagens(clienteId, prestadorId);

  if (response) {
    res.status(200).json(response);
  } else {
    res
      .status(500)
      .json({
        message:
          "An error occured while getting the messages from the Mongo server",
        success: false,
      });
  }
};
