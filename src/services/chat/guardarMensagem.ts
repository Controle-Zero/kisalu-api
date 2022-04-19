import mongoose from "mongoose";
import { log } from "../../libs/log";
import MessageModel, { MessageIU } from "../../models/chat.models";

export default async function guardarMensagem(
  message: Omit<MessageIU, "createdAt" | "updatedAt">
): Promise<MessageIU> {
  const newMessage = new MessageModel(message);

  try {
    const savedMessage = await newMessage.save();
    return savedMessage;
  } catch (err) {
    log.error(
      `An error occured while saving the message into the Mongo server- ${err}`
    );
    return undefined;
  }
}
