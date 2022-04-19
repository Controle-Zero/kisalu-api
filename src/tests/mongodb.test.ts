import { initMongoDB } from "../libs/configs/mongodb";
import mongoose from "mongoose";
import Cliente from "../models/cliente.models";
import { getData } from "../mocks/helpers/dataHandler";

describe("MongoDB Tests", () => {
  let Cliente, clienteSchema;

  beforeAll((done) => {
    initMongoDB().then(() => {
      const Schema = mongoose.Schema;

      clienteSchema = new Schema(
        {
          nome: {
            type: String,
          },
          bi: {
            type: String,
          },
          dataNasc: {
            type: String,
          },
          morada: {
            type: String,
          },
          email: {
            type: String,
          },
          telefone: {
            type: Number,
          },
          password: {
            type: String,
          },
        },
        { timestamps: true }
      );

      Cliente = mongoose.model("Cliente", clienteSchema);

      done();
    });
  });

  afterAll(() => {
    mongoose.disconnect();
  });

  test("Save a client", (done) => {
    const clienteObj: Cliente = getData().cliente;

    const clienteMongo = new Cliente({
      nome: clienteObj.nome,
      bi: clienteObj.bi,
      dataNasc: clienteObj.dataNasc,
      morada: clienteObj.morada,
      email: clienteObj.email,
      telefone: clienteObj.telefone,
      password: clienteObj.password,
    });

    expect(clienteMongo.nome).toBe("Reginaldo Reis");
  });
});
