import Atividade from "./atividade.models";

export default interface Cliente {
    idCliente? : string;
    bi : string;
    nome : string;
    dataNasc : Date;
    morada : string;
    email : string;
    telefone : number;
    password : string;
    atividades? : Atividade[];
}