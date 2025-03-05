import { useEffect, useState } from "react";
import { buscar } from "../../services/Service";
import Plano from "../../model/Plano";

export default function SecaoPlanos(){
    const [planos, setPlanos] = useState<Plano[]>([])

    async function buscarPlanos() {
        try {
            await buscar('/plano', setPlanos, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNzQxMTc0OTA4LCJleHAiOjE3NDExNzg1MDh9.1i9zCNTOxskNlI1W8YVAqjSmw8q9kcCHxSrroTxVuqY`,
                },
            })
        } catch (error: any) {
            //
        }
    }

    useEffect(() => {
        buscarPlanos()
    }, [])

    return(
        <section className="flex flex-col">
            <h2 className="text-xl font-semibold my-4">Oportunidades</h2>
            
            {planos.length == 0 && <p>Carregando...</p>}

            <div className="flex gap-5">
                {planos.map(plano => 
                    <div className="max-w-xs min-w-[300px] border border-gray-200 bg-gray-200 px-5 py-3 rounded-md shadow-md">
                        <div className="flex-col">
                            <h3 className="text-[#006056] text-md my-5 font-semibold">Dados da oportunidade</h3>

                            <div className="flex flex-col my-3">
                                <span className="text-gray-600 text-sm uppercase font-semibold">Nome</span>
                            <span>{plano.nome}</span>
                            </div>
                         
                            <div className="flex flex-col my-3">
                                <span className="text-gray-600 text-sm uppercase font-semibold">Descrição</span>
                                <span>{plano.descricao}</span>
                            </div>
 
                            <div className="flex flex-col my-3">
                                <span className="text-gray-600 text-sm uppercase font-semibold">Status</span>
                                <span className="font-bold">{plano.status}</span>
                            </div>
 
                            <div className="flex flex-col my-3">
                                <span className="text-gray-600 text-sm uppercase font-semibold">Valor</span>
                                <span>R$ {plano.valor}</span>
                            </div>

                            <h3 className="text-[#006056] text-md my-5 font-semibold">Dados do cliente</h3>

                            <div className="flex flex-col my-3">
                                <span className="text-gray-600 text-sm uppercase font-semibold">Nome</span>
                                <span>{plano.cliente?.nome}</span>
                            </div>

                            <div className="flex flex-col my-3">
                                <span className="text-gray-600 text-sm uppercase font-semibold">Telefone</span>
                                <span>{plano.cliente?.tel}</span>
                            </div>

                            <h3 className="text-[#006056] text-md my-5 font-semibold">Dados da empresa</h3>

                            <div className="flex flex-col my-3">
                                <span className="text-gray-600 text-sm uppercase font-semibold">Nome</span>
                                <span>{plano.empresa?.nome}</span>
                            </div>

                            <div className="flex flex-col my-3">
                                <span className="text-gray-600 text-sm uppercase font-semibold">E-mail</span>
                                <span>{plano.empresa?.email}</span>
                            </div>
                        </div>
                     </div>
                )}
            </div>
        </section>
    );
}