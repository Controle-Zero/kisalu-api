import bodyParser from "body-parser";
import { Router } from "express";
import { getMensagens } from "../controllers/mensagem.controllers";
import checkAuthenticatedToken from "../middleware/checkAuthenticatedToken";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const chatRoutes = Router();
const jsonParser = bodyParser.json();

chatRoutes.get(
  "/mensagens",
  jsonParser,
  ensureAuthenticated,
  checkAuthenticatedToken,
  getMensagens
);

export { chatRoutes };
