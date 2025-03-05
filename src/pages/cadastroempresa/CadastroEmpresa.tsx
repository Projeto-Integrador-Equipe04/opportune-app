import React, { useState } from 'react';
import './Cadastroempresa.css';
import Empresa from '../../model/Empresa';
import { StatusPlano } from '../../types/PlanoTypes';

const Cadastroempresa = () => {
    const [empresa, setEmpresa] = useState<Empresa>({
        id: 0,
        nome: '',
        cnpj: '',
        email: '',
        senha: '',
        data: '',
        plano: { id: 0, nome: '', descricao: '',  status: StatusPlano.ABERTA, preco: 0, data: new Date(), empresa: null, cliente: null }
    });

    const [confirmPassword, setConfirmPassword] = useState('');
    const [foto, setFoto] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (empresa.senha !== confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }
        console.log('Cadastro realizado com:', empresa);
        if (foto) {
            console.log('Foto selecionada:', foto);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmpresa(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePlanoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmpresa(prevState => ({
            ...prevState,
            plano: {
                ...prevState.plano,
                [name]: value
            }
        }));
    };

    const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFoto(e.target.files[0]);
        }
    };

    return (
        <div className="container">
            <div className="fundo"></div>
            <div className="cadastro-container">
                <h2 style={{ marginBottom: '20px', color: '#023d37', fontSize: '30px', fontWeight: 'bold' }}>Cadastrar</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome da Empresa</label>
                        <input type="text" name="nome" value={empresa.nome} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>CNPJ</label>
                        <input type="text" name="cnpj" value={empresa.cnpj} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={empresa.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" name="senha" value={empresa.senha} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Confirme a Senha</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Plano</label>
                        <input type="text" name="nome" value={empresa.plano.nome} onChange={handlePlanoChange} required />
                    </div>
                    <div className="form-group">
                        <label>Foto</label>
                        <input
                            type="file"
                            name="foto"
                            id="foto-upload"
                            onChange={handleFotoChange}
                            accept="image/*"
                            style={{ display: 'none' }} 
                        />
                        <label htmlFor="foto-upload" className="custom-file-upload">
                            {foto ? foto.name : 'Selecionar foto'}
                        </label>
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#15cebb',
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0fa89a')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#15cebb')}
                    >
                        Cadastrar
                    </button>
                </form>
                <p>Já tem uma conta? <a href="/login">Faça login</a></p>
            </div>
        </div>
    );
};

export default Cadastroempresa;
