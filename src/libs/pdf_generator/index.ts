import pdf from "html-pdf";
import { log } from "../log";
import atividadeTemplate, {
  AtividadeTemplateContext,
} from "./renders/atividade.renders";

export async function generateAtividadePDF(params: AtividadeTemplateContext) {
  /*pdf
    .create(atividadeTemplate(params), {})
    .toFile(`./comprovativo-${params.atividade.id}.pdf`, (err, res) => {
      if (err) return log.error("Erro ao criar o arquivo PDF");
      log.info(res);
    });*/

  return atividadeTemplate(params);
}
