import { Router } from "express";
import { retornarAnuncios } from "../controller/anuncio.controllers";

const routes = Router();

routes.get("/", retornarAnuncios);

export default routes;
