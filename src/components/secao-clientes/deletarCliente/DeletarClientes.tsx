import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";


const DeletarClientes = () => {
  const [cliente, setCliente] = useState({
    id: 0,
    nome: "",
    descricao: "",
    status: "",  
    valor: "",
  });
  const { id } = useParams<{ id: string }>()

  const navigate = useNavigate();
  const { empresa, handleLogout } = useContext(AuthContext)
  const token = empresa?.token

  async function buscarClientePorId(id: string) {
    try {
        await buscar(`/cliente/${id}`, setCliente, {
            headers: { Authorization: token }
        })
    } catch (error: any) {
        if (error.toString().includes('403')) {
            handleLogout()
        }
    }
  }

  async function deletarCliente() {
    try {
        await deletar(`/cliente/${id}`, {
            headers: { Authorization: token }
        })
        handleBack()
    } catch (error: any) {
        if (error.toString().includes('403')) {
            handleLogout()
        }
    }
  }

  useEffect(() => {
    if (id !== undefined) buscarClientePorId(id)
  }, [])
  

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="pl-40 my-10 min-h-[calc(100vh-101px)] ml-80">
      <h3 className='text-left text-neutral-900 font-semibold mb-4 mt-8'>
        Você tem certeza de que deseja apagar o cliente a seguir?
      </h3>

      <div className="max-w-xs min-w-[300px] border border-gray-200 bg-gray-200 px-5 py-3 rounded-md shadow-md mt-8 ml-12">
        <div className="flex-col ml">
            <div className="flex flex-col my-3 ml-">
                <span className="text-gray-600 text-sm uppercase font-semibold">Nome</span>
                <span>{cliente.nome}</span>
            </div>
          
            <div className="flex flex-col my-3">
                <span className="text-gray-600 text-sm uppercase font-semibold">Descrição</span>
                <span>{cliente.descricao}</span>
            </div>

            <div className="flex flex-col my-3">
                <span className="text-gray-600 text-sm uppercase font-semibold">Status</span>
                <span className="font-bold">{cliente.status}</span>
            </div>

            <div className="flex flex-col my-3">
                <span className="text-gray-600 text-sm uppercase font-semibold">Valor</span>
                <span>R$ {cliente.valor}</span>
            </div>
        </div>
      </div>

      <div className="flex flex-row gap-3 mt-8">
        <button 
          className='text-slate-100 p-2.5 rounded ml-16  bg-[#006056] hover:bg-[#1d978b] '
          onClick={handleBack}>
          Voltar
        </button>

        <button 
          className='text-slate-100 bg-red-500 hover:bg-red-700 p-2.5 rounded flex items-center ml-12'
          onClick={deletarCliente}
        > 
          <span>Confirmar exclusão</span>
        </button>
      </div>
    </div>

  );
};

export default DeletarClientes;
