import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { RotatingLines } from "react-loader-spinner"
import { AuthContext } from "./EditarPerfil"
import { buscar, deletar } from "../../services/Service"

function DeletarEmpresa() {

    const navigate = useNavigate()

    const [empresaData, setEmpresaData] = useState<{ nome: string }>({ nome: "" })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { empresa,handleLogout } = useContext(AuthContext)
    const token = empresa?.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/empresa/${id}`, setEmpresaData, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarEmpresa() {
        setIsLoading(true)

        try {
            await deletar(`/empresa/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Empresa apagada com sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            } else {
                alert('Erro ao deletar a empresa.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/empresas")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar empresa</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a empresa a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Empresa
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{empresaData.nome}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                                   hover:bg-indigo-600 flex items-center justify-center'
                                   onClick={deletarEmpresa}>
                        {isLoading ? 
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> : 
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarEmpresa
