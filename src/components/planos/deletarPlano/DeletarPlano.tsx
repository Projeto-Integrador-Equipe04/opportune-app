import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";

const DeletarPlano = () => {
  const [plano, setPlano] = useState({
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

  async function buscarPlanoPorId(id: string) {
    try {
        await buscar(`/plano/${id}`, setPlano, {
            headers: { Authorization: token }
        })
    } catch (error: any) {
        if (error.toString().includes('403')) {
            handleLogout()
        }
    }
  }

  async function deletarPlano() {
    try {
        await deletar(`/plano/${id}`, {
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
    if (id !== undefined) buscarPlanoPorId(id)
  }, [])
  

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="pl-40 my-10 min-h-[calc(100vh-101px)]">
      <h3 className='text-left text-neutral-900 font-semibold mb-4 mt-8'>
        Você tem certeza de que deseja apagar o plano a seguir?
      </h3>

      <div className="max-w-xs min-w-[300px] border border-gray-200 bg-gray-200 px-5 py-3 rounded-md shadow-md mt-8">
        <div className="flex-col">
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
        </div>
      </div>

      <div className="flex flex-row gap-3 mt-8">
        <button 
          className='text-gray-800 p-2.5'
          onClick={handleBack}>
          Voltar
        </button>

        <button 
          className='text-slate-100 bg-red-500 hover:bg-red-700 p-2.5 rounded flex items-center'
          onClick={deletarPlano}
        > 
          <span>Confirmar exclusão</span>
        </button>
      </div>
    </div>


  );
};

export default DeletarPlano;