import Atividade from "./atividade.models";
import Prestador from "./prestador.models";

export default interface Anuncio {
    id : string;
    titulo : string;
    dataCriado : Date;
    atividades : Atividade[];
    prestador : Prestador;
}