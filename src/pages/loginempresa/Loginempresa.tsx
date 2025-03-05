import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './Loginempresa.css';
import { EmpresaLogin } from "../../model/EmpresaLogin";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { useNavigate} from 'react-router-dom';

const Loginempresa = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { handleLogin } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            ToastAlerta("Preencha todos os campos!", "erro");
            return;
        }

        const empresaLogin: EmpresaLogin = {
            email,
            senha: password,
        };

        
        console.log("Dados enviados:", empresaLogin);
        setIsSubmitting(true);
        
        try {
            await handleLogin(empresaLogin);
            console.log('Login realizado com sucesso!');
            navigate('/dashboard');

        } catch (error) {
            console.error('Erro ao realizar login:', error);
            ToastAlerta("Email ou senha incorretos!", "erro");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 style={{ marginBottom: '20px', color: '#023d37', fontSize: '30px', fontWeight: 'bold' }}>
                    Welcome back!
                </h2>
                <p>Please login to your account</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: isHovered ? '#0fa89a' : '#15cebb',
                            color: isHovered ? '#fff' : '#fff',
                            fontSize: '16px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease, color 0.3s ease',
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {isSubmitting ? 'Carregando...' : 'Login'}
                    </button>
                </form>
                <p>
                    Não tem uma conta? <a href="/cadastroempresa">Cadastre-se</a>
                </p>
            </div>
        </div>
    );
};

export default Loginempresa;