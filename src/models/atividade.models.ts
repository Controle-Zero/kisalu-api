import Prestador from "./prestador.models";
import Cliente from "./cliente.models";

export default interface Atividade {
    idAtividade : string;
    dataCriado : Date;
    dataFinalizado : Date;
    valorAssociado : number;
    numRef : number;
    estado : string;
    idPrestador : string;
    idCliente : string;
}