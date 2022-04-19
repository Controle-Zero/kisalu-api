import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    clienteID: {
      type: String,
      required: true,
    },
    prestadorID: {
      type: String,
      required: true,
    },
    atividadeID: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export interface MessageIU {
  clienteID: string;
  prestadorID: string;
  atividadeID: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export default mongoose.model("Mensagem", MessageSchema);
