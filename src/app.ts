import express from "express";
import dotenv from "dotenv";
import { clienteRoutes } from "../src/routes/cliente.routes";
import { prestadorRoutes } from "./routes/prestador.routes";
import { atividadeRoutes } from "./routes/atividade.routes";

dotenv.config();

const app = express();

app.use("/cliente", clienteRoutes);
app.use("/prestador", prestadorRoutes);
app.use("/atividade", atividadeRoutes);

export default app;
