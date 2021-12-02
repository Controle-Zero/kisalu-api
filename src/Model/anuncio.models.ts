import Atividade from "./atividade.models";

export default interface Anuncio {
    titulo : String;
    dataCriado : Date;
    atividades : Atividade[];
}