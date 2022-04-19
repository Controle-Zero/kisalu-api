import express from "express";
import dotenv from "dotenv";
import { clienteRoutes } from "../../routes/cliente.routes";
import { prestadorRoutes } from "../../routes/prestador.routes";
import { categoriaRoutes } from "../../routes/categoria.routes";
import cors from "cors";
import { atividadeRoutes } from "../../routes/atividade.routes";
import swaggerUI from "swagger-ui-express";
import swaggerConfig from "../../libs/configs/swagger.json";
import { chatRoutes } from "../../routes/chat.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use("/api/doc", swaggerUI.serve, swaggerUI.setup(swaggerConfig));
app.use("/cliente", clienteRoutes);
app.use("/prestador", prestadorRoutes);
app.use("/categoria", categoriaRoutes);
app.use("/atividade", atividadeRoutes);
app.use("/chat", chatRoutes);

export default app;
