import { Response, Request } from "express";
import retornarMensagens from "../services/chat/retornarMensagens";

export const getMensagens = async (req: Request, res: Response) => {
  console.log(req.params.clienteID, req.params.prestadorID);
  const response = await retornarMensagens(
    req.params.clienteID,
    req.params.prestadorID
  );

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(500).json({
      message:
        "An error occured while getting the messages from the Mongo server",
      success: false,
    });
  }
};
