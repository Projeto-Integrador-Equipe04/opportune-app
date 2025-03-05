import Cliente from "./Cliente";
import Empresa from "./Empresa";

export default interface Plano{
    id: number,
	nome: string,
	descricao: string,
    status: string,
    valor: number,
    data: Date,
    empresa: Empresa [] | null ,
    cliente: Cliente [] | null,
}