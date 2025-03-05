import { createContext, useState, ReactNode } from 'react';
import { EmpresaLogin } from "../model/EmpresaLogin";
import { cadastrarUsuario, login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
    empresaUser: EmpresaLogin;
    handleLogout(): void;
    handleLogin(empresa: EmpresaLogin): Promise<void>;
    handleRegister(empresa: EmpresaLogin): Promise<void>;
    isLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
    const [empresaUser, setEmpresaUser] = useState<EmpresaLogin>({} as EmpresaLogin);
    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(empresaLogin: EmpresaLogin) {
        setIsLoading(true);

        try {
            await login(`/empresa/logar`, empresaLogin, setEmpresaUser);
            ToastAlerta("Empresa autenticada com sucesso!", "sucesso");
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            ToastAlerta("Dados da empresa inconsistentes!", "erro");
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    async function handleRegister(empresa: EmpresaLogin) {
        setIsLoading(true);

        try {
            await cadastrarUsuario(`/empresa/cadastrar`, empresa, setEmpresaUser);
            ToastAlerta("Empresa registrada com sucesso!", "sucesso");
        } catch (error) {
            console.error("Erro ao realizar registro:", error);
            ToastAlerta("Erro ao registrar empresa!", "erro");
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    function handleLogout() {
        setEmpresaUser({} as EmpresaLogin);
        ToastAlerta("Empresa deslogada com sucesso!", "info");
    }

    return (
        <AuthContext.Provider value={{ empresaUser, handleLogin, handleLogout, handleRegister, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}



// export function useAuth() {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// }