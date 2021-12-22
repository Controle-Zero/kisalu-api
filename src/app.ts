import express from "express";
import dotenv from "dotenv";
import { clienteRoutes } from "../src/routes/cliente.routes";
import { prestadorRoutes } from "./routes/prestador.routes";
import { atividadeRoutes } from "./routes/atividade.routes";
import { categoriaRoutes } from "./routes/categoria.routes";

dotenv.config();

const app = express();

app.use("/cliente", clienteRoutes);
app.use("/prestador", prestadorRoutes);
app.use("/atividade", atividadeRoutes);
app.use("/categoria", categoriaRoutes);

export default app;
