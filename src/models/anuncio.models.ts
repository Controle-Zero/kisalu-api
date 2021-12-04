import Atividade from "./atividade.models";
import Prestador from "./prestador.models";

export default interface Anuncio {
    idAnuncio : string;
    titulo : string;
    dataCriado : Date;
    atividades : Atividade[];
    prestador : Prestador;
}