import express from "express";
import dotenv from "dotenv";
import clienteRoute from "./Routes/cliente.routes";
import log from "./log";

dotenv.config();

const app = express();

app.use("/cliente", clienteRoute);

app.listen(process.env.URL || 8080, () => {
  log.info(`RODANDO NA PORTA ${process.env.URL ? process.env.URL : 8080}...`);
});
