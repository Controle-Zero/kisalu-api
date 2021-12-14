import express from "express";
import dotenv from "dotenv";
import { clienteRoutes } from "../src/routes/cliente.routes";
import { prestadorRoutes } from "./routes/prestador.routes";

dotenv.config();

const app = express();

app.use("/cliente", clienteRoutes);
app.use("/prestador", prestadorRoutes);

export default app;
