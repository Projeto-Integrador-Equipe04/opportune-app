import { StatusPlano } from "../types/PlanoTypes";
import Cliente from "./Cliente";
import Empresa from "./Empresa";

export default interface Plano{
    id: number,
	nome: string,
	descricao: string,
    status: StatusPlano,
    valor: number,
    data: Date,
    empresa: Empresa | null ,
    cliente: Cliente | null,
}