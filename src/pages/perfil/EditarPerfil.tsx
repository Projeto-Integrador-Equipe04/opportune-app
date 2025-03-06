import { createContext, useContext, useState, ReactNode} from 'react';
import { EmpresaLogin } from '../../model/EmpresaLogin';
import { login } from '../../services/Service';
import { ToastAlerta } from '../../utils/ToastAlerta';


interface AuthContextProps {
    empresa: EmpresaLogin | null;
    token: string | null;
    handleLogout(): void;
    handleLogin(empresa: EmpresaLogin): Promise<void>;
    isLoading: boolean;
    isAuthenticated: boolean; 
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
    const [empresa, setEmpresa] = useState<EmpresaLogin | null>(null);
    const [token, setToken] = useState<string | null>(null); // Sem localStorage
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Mantém a lógica sem persistir no localStorage

    async function handleLogin(empresaLogin: EmpresaLogin) {
        setIsLoading(true);

        try {
            const resposta = await login(`/empresa/logar`, empresaLogin, setEmpresa);

            // Recuperando o token da resposta da API
            const tokenReceived = resposta.headers['authorization']; // Ajuste de acordo com o nome correto do cabeçalho
            setToken(tokenReceived);
            setIsAuthenticated(true);

            ToastAlerta("Empresa autenticada com sucesso!", "sucesso");
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            ToastAlerta("Dados da empresa inconsistentes!", "erro");
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    function handleLogout() {
        setEmpresa(null);
        setToken(null); // Remover o token do estado
        setIsAuthenticated(false);
        ToastAlerta("Empresa deslogada com sucesso!", "info");
    }

    return (
        <AuthContext.Provider value={{ empresa, token, handleLogin, handleLogout, isLoading, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
