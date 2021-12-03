import Atividade from "./atividade.models";

export default interface Cliente {
    id : Number;
    bi : String;
    dataNasc : Date;
    morada : String;
    email : String;
    telefone : Number;
    password : String;
    atividades? : Atividade[];
}