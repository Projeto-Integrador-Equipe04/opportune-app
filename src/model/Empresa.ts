import Plano from "./Plano";

export default interface Empresa{
    id: number,
	nome: string,
    cnpj:string,
    email: string,
    senha: string,
    data: string,
    plano: Plano;
}