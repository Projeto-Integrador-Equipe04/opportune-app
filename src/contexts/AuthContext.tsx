import { ReactNode, createContext, useState } from "react";
import EmpresaLogin from "../model/EmpresaLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
    empresa: EmpresaLogin | null;
    handleLogout(): void;
    handleLogin(empresa: EmpresaLogin): Promise<void>;
    isLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {

    const [empresa, setEmpresa] = useState<EmpresaLogin | null>(null);

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(empresaLogin: EmpresaLogin) {
        setIsLoading(true);

        try {
            await login(`/empresa/logar`, empresaLogin, setEmpresa);
            ToastAlerta("Empresa autenticada com sucesso!", "sucesso");
        } catch (error) {
            ToastAlerta("Dados da empresa inconsistentes!", "erro");
        }

        setIsLoading(false);
    }

    function handleLogout() {
        setEmpresa(null);
        ToastAlerta("Empresa deslogada com sucesso!", "info");
    }

    return (
        <AuthContext.Provider value={{ empresa, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}