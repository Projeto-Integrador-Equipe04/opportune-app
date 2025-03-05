import Plano from "./Plano";
export interface EmpresaLogin {
    id?: number;
    nome?: string;
    email: string;
    senha: string;
    plano?: Plano;
    data?: string; 
    cpnj?: string; 
}