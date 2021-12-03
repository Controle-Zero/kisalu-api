import Atividade from "./atividade.models";

export default interface Cliente {
    id : string;
    bi : string;
    dataNasc : Date;
    morada : string;
    email : string;
    telefone : number;
    password : string;
    atividades? : Atividade[];
}