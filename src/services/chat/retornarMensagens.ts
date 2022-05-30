import { MessageIU } from "../../models/chat.models";
import MessageModel from "../../models/chat.models";
import { log } from "../../libs/log";

export default async function retornarMensagens(
  clienteID: string,
  prestadorID: string
): Promise<MessageIU[]> {
  try {
    const messages = await MessageModel.find({ clienteID, prestadorID });
    return messages;
  } catch (err) {
    log.error(
      `An error occured while getting the messages from the Mongo server- ${err}`
    );
    return undefined;
  }
}
