import { useState } from "react";
import { atualizarStatusPlano } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Planos() {
    const [plano, setPlano] = useState({
        id: 0,
        nome: '',
        descricao: '',
        status: 'fechada',
        preco: '',
        data: ''
    });

    async function handleAtualizarStatus(novoStatus: string) {
        try {
            const token = localStorage.getItem("token");
            const header = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

        
            await atualizarStatusPlano(plano.id, novoStatus, setPlano, header);

           
            ToastAlerta("Status atualizado com sucesso!", "sucesso");
        } catch (error) {
        
            ToastAlerta("Erro ao atualizar o status", "erro");
        }
    }

    return (
        <div>
            <h1>Gerenciamento de Planos</h1>
            <h2>{plano.nome}</h2>
            <p>Status atual: {plano.status}</p>
            <button onClick={() => handleAtualizarStatus("aberta")}>Abrir</button>
            <button onClick={() => handleAtualizarStatus("fechada")}>Fechar</button>
            <button onClick={() => handleAtualizarStatus("perdida")}>Perder</button>
        </div>
    );
}

export default Planos;