import Cliente from "./cliente.models";
import Anuncio from "./anuncio.models";
import Atividade from "./atividade.models";

export default interface Prestador extends Cliente {
    estado : string;
    iban : string;
    classificacao : number;
    numAvaliacoes : number;
    rate : number;
    anuncios : Anuncio[];
    atividades : Atividade[];
}