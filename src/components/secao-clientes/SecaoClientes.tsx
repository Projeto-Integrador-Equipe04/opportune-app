import { useEffect, useState, useContext } from "react";
import { buscar } from "../../services/Service";
import Cliente from "../../model/Cliente";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SecaoClientes(){

    const navigate = useNavigate();
    const [clientes, setCliente] = useState<Cliente[]>([])
    const [isLoading, setIsLoading] = useState<boolean | null>(null)

    const { empresa, handleLogout } = useContext(AuthContext)
    const token = empresa?.token;

    async function buscarClientes() {
        try {
            setIsLoading(true)
            await buscar('/cliente', setCliente, {
                headers: {
                    Authorization: token
                },
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (token === '') {
            console.error("Você precisa estar logado");

            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarClientes()
    }, [])

    return(
        <section className="flex flex-col">
            <h2 className="text-xl font-semibold my-4">Clientes</h2>
            
            {isLoading && <p>Carregando...</p>}
            {isLoading == false && clientes.length == 0 && <p>Nenhum cliente cadastrado.</p>}

            <div className="flex gap-5">
                {clientes.map(cliente => 
                    <div className="max-w-xs min-w-[300px] border border-gray-200 bg-gray-200 px-5 py-3 rounded-md shadow-md">
                        <div className="flex-col">
                            <h3 className="text-[#006056] text-md my-5 font-semibold">Dados do cliente</h3>

                            <div className="flex flex-col my-3">
                                <span className="text-gray-600 text-sm uppercase font-semibold">Nome</span>
                            <span>{cliente.nome}</span>
                            </div>
                         
                            <div className="flex flex-col my-3">
                                <span className="text-gray-600 text-sm uppercase font-semibold">cpf</span>
                                <span>{cliente.cpf}</span>
                            </div>
 
                            <div className="flex flex-col my-3">
                                <span className="text-gray-600 text-sm uppercase font-semibold">Telefone</span>
                                <span className="font-bold">{cliente.tel}</span>
                            </div>
 
                            <div className="flex flex-col my-3">
                                <span className="text-gray-600 text-sm uppercase font-semibold">email</span>
                                <span>{cliente.email}</span>
                            </div>
                        </div>
                     </div>
                )}
            </div>
        </section>
    );
}