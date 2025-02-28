import Plano from "./Plano";

export default interface EmpresaLogin{
    id: number,
	nome: string,
    email: string,
    senha: string,
    plano: Plano,
    data: Date,
    cnpj: string,

}