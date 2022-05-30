import { Response } from "express";
import CustomRequest from "../middleware/types/customRequest";
import Cliente from "../models/cliente.models";
import { autenticarClienteService } from "../services/cliente/autenticarCliente";
import { retornarClienteService } from "../services/cliente/retornarCliente";
import { actualizarClienteService } from "../services/cliente/actualizarCliente";
import { criarClienteService } from "../services/cliente/criarCliente";
import retornarAtividadesService from "../services/cliente/retornarAtividades";

export const criarCliente = async (req: CustomRequest, res: Response) => {
  const cliente: Cliente = req.body;
  const response = await criarClienteService(cliente);
  if (response) {
    if (response.success) {
      res.status(201).json(response);
    } else {
      res.status(400).json(response);
    }
  } else {
    res
      .status(400)
      .json({
        message: "An error occured creating the customer",
        success: false,
      });
  }
};

export const retornarCliente = async (req: CustomRequest, res: Response) => {
  const cliente = await retornarClienteService(req.id);
  if (cliente) {
    res.status(200).json({ cliente, success: true });
  } else {
    res.status(404).json({ message: "Customer wasn't found", success: false });
  }
};

export const actualizarCliente = async (req: CustomRequest, res: Response) => {
  const response = await actualizarClienteService(req.id, req.body);

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).json({
      message: "An error occured updating the customer",
      success: false,
    });
  }
};

export const apagarCliente = async (req: CustomRequest, res: Response) => {};

export const autenticarCliente = async (req: CustomRequest, res: Response) => {
  const { email, password, deviceData } = req.body;

  const token = await autenticarClienteService(email, password, deviceData);

  if (token) {
    res.status(200).json(token);
  } else {
    res.status(400).json({ message: "Incorrect data", success: false });
  }
};

export const retornarAtividades = async (req: CustomRequest, res: Response) => {
  const response = await retornarAtividadesService(req.id);

  if (response) {
    res.status(200).json(response);
  } else {
    res
      .status(400)
      .json({ message: "An error occurred while getting the activities" });
  }
};
