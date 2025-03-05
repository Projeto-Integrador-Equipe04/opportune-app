import { useEffect, useState } from "react";
import { buscar } from "../../services/Service";
import Cliente from "../../model/Cliente";

export default function SecaoClientes(){
    const [clientes, setCliente] = useState<Cliente[]>([])

    async function buscarClientes() {
        try {
            await buscar('/cliente', setCliente, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNzQxMTgyNTc1LCJleHAiOjE3NDExODYxNzV9.10SC9SDN5mKBPsnHEmsvJtCMEMLg3oNgy1Z7j7Pw9nE`,
                },
            })
        } catch (error: any) {
            //
        }
    }

    useEffect(() => {
        buscarClientes()
    }, [])

    return(
        <section className="flex flex-col">
            <h2 className="text-xl font-semibold my-4">Clientes</h2>
            
            {clientes.length == 0 && <p>Carregando...</p>}

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