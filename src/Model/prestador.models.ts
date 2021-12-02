import Cliente from "./cliente.models";
import Anuncio from "./anuncio.models";
import Atividade from "./atividade.models";

export default interface Prestador extends Cliente {
    estado : String;
    iban : String;
    classificacao : Number;
    numAvaliacoes : Number;
    rate : Number;
    anuncios : Anuncio[];
    atividades : Atividade[];
}