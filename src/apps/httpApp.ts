import express from "express";
import dotenv from "dotenv";
import { clienteRoutes } from "../routes/cliente.routes";
import { prestadorRoutes } from "../routes/prestador.routes";
import { categoriaRoutes } from "../routes/categoria.routes";
import cors from "cors";
import { atividadeRoutes } from "../routes/atividade.routes";
import swaggerUI from "swagger-ui-express";
import swaggerConfing from "../libs/configs/swagger";

dotenv.config();

const app = express();

app.use(cors());
app.use("/api/doc", swaggerUI.serve, swaggerUI.setup(swaggerConfing));
app.use("/cliente", clienteRoutes);
app.use("/prestador", prestadorRoutes);
app.use("/categoria", categoriaRoutes);
app.use("/atividade", atividadeRoutes);

export default app;
