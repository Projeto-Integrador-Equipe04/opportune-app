import { createContext, useState, ReactNode} from 'react';
import { EmpresaLogin } from "../model/EmpresaLogin";
import { cadastrarUsuario, login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
    empresaUser: EmpresaLogin;
    token: string | null;
    handleLogout(): void;
    handleLogin(empresa: EmpresaLogin): Promise<void>;
    handleRegister(empresa: EmpresaLogin): Promise<void>;
    isLoading: boolean;
    isAuthenticated: boolean; 
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
    const [empresaUser, setEmpresaUser] = useState<EmpresaLogin>({} as EmpresaLogin);
    const [token, setToken] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(!!token); 


    async function handleLogin(empresaLogin: EmpresaLogin) {
        setIsLoading(true);

        try {
            const response = await login(`/empresa/logar`, empresaLogin, setEmpresaUser);
            setToken(response.data.token)


            setToken(token);

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

    async function handleRegister(empresa: EmpresaLogin) {
        setIsLoading(true);
    
        try {
            await cadastrarUsuario(`/empresa/cadastrar`, empresa, setEmpresaUser);
            setIsAuthenticated(true); 
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
        setToken("");
        // localStorage.removeItem('token');
        setIsAuthenticated(false);
        ToastAlerta("Empresa deslogada com sucesso!", "info");
    }

    return (
        <AuthContext.Provider value={{ empresaUser, token, handleLogin, handleLogout, handleRegister, isLoading, isAuthenticated }}>
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