import Atividade from "./atividade.models";
import Prestador from "./prestador.models";

export default interface Anuncio {
    id : Number;
    titulo : String;
    dataCriado : Date;
    atividades : Atividade[];
    prestador : Prestador;
}