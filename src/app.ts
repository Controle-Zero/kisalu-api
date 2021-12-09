import express from "express";
import dotenv from "dotenv";
import { clienteRoutes } from "../src/routes/cliente.routes";
import { log } from "../src/log";
import { prestadorRoutes } from "./routes/prestador.routes";

dotenv.config();

const app = express();

app.use("/cliente", clienteRoutes);
app.use("/prestador", prestadorRoutes);

app.listen(process.env.PORT || 8080, () => {
  log.info(`RODANDO NA PORTA ${process.env.PORT ? process.env.PORT : 8080}...`);
});
