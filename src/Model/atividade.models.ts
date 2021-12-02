import Anuncio from "./anuncio.models";
import Prestador from "./prestador.models";
import Cliente from "./cliente.models";

export default interface Atividade {
    id : Number;
    dataCriado : Date;
    dataFinalizado : Date;
    valorAssociado : Number;
    numRef : Number;
    estado : String;
    anuncio : Anuncio;
    prestador : Prestador;
    cliente : Cliente;
}