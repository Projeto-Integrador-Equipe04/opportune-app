export interface EmpresaLogin {
    id?: number;
    nome?: string;
    email: string;
    senha: string;
    plano?: string;
    data?: string; 
    cnpj?: string; 
    token: string;
}