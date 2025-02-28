import Plano from "./Plano";

export default interface Cliente{
    nome: string,
	cpf: string,
	tel: string,
    foto: string,
    email: string,
    senha: string,
    plano: Plano[]  | null;
}