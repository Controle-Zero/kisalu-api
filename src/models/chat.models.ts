import mongoose from "mongoose";
import { Roles } from "../channels/interfaces/payloads";

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    from: {
      type: String
    },
    clienteID: {
      type: String,
    },
    prestadorID: {
      type: String,
    },
    atividadeID: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

export interface MessageIU {
  from: Roles;
  clienteID: string;
  prestadorID: string;
  atividadeID: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export default mongoose.model("Mensagem", MessageSchema);
