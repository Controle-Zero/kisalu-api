import { Router } from "express";
import { retornarAnuncios } from "../controllers/anuncio.controllers";

const routes = Router();

routes.get("/", retornarAnuncios);

export default routes;
