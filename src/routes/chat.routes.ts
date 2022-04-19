import { Router } from "express";
import { getMensagens } from "../controllers/mensagem.controllers";
import checkAuthenticatedToken from "../middleware/checkAuthenticatedToken";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const chatRoutes = Router();

chatRoutes.get(
  "/mensagens/:clienteID/:prestadorID",
  ensureAuthenticated,
  checkAuthenticatedToken,
  getMensagens
);

export { chatRoutes };
