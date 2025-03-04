import React, { useState } from 'react';
import './Loginempresa.css';

const Loginempresa = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login realizado com:', email, password);
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
                        Login
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
