import { useState } from "react";
import { atualizarStatusPlano } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { StatusPlano } from "../../types/PlanoTypes"; 

function Planos() {
    const [plano, setPlano] = useState({
        id: 0,
        nome: '',
        descricao: '',
        status: 'fechada' as StatusPlano, 
        preco: '',
        data: ''
    });

    const [loading, setLoading] = useState(false); 

    async function handleAtualizarStatus(novoStatus: StatusPlano) {
        const token = localStorage.getItem("token");

   
        if (!token) {
            ToastAlerta("Token não encontrado", "erro");
            return;
        }

        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        setLoading(true); 

        try {
            await atualizarStatusPlano(plano.id, novoStatus, setPlano, header);
            ToastAlerta("Status atualizado com sucesso!", "sucesso");
        } catch (error) {
            ToastAlerta("Erro ao atualizar o status", "erro");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h1>Gerenciamento de Planos</h1>
            <h2>{plano.nome}</h2>
            <p>Status atual: {plano.status}</p>
            <button 
                onClick={() => handleAtualizarStatus(StatusPlano.ABERTA)} 
                disabled={loading} 
            >
                Abrir
            </button>
            <button 
                onClick={() => handleAtualizarStatus(StatusPlano.FECHADA)} 
                disabled={loading}
            >
                Fechar
            </button>
            <button 
                onClick={() => handleAtualizarStatus(StatusPlano.PERDIDA)} 
                disabled={loading}
            >
                Perder
            </button>
        </div>
    );
}

export default Planos;