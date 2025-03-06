import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Cliente from "../../../model/Cliente";

const EditarPlano = () => {
  const [cliente, setCliente] = useState<Cliente>()
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [plano, setPlano] = useState({
    id: 0,
    nome: "",
    descricao: "",
    status: "",  
    valor: "",
    cliente: {
      id: 0
    }
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

  async function buscarClientes() {
    try {
        await buscar('/cliente', setClientes, {
            headers: { Authorization: token }
        })
    } catch (error: any) {
        if (error.toString().includes('403')) {
            handleLogout()
        }
    }
  }

  useEffect(() => {
    if (id !== undefined) buscarPlanoPorId(id)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPlano({ ...plano, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      plano.id = Number(id)

      if (cliente) {
        plano.cliente = cliente
      }

      await atualizar(`/plano`, plano, setPlano, {
          headers: {
              Authorization: token,
          },
      });

      ToastAlerta("Plano atualizado com sucesso!", "sucesso")
      navigate(-1)
    } catch (error: any) {
        if (error.toString().includes('403')) {
            handleLogout()
        } else {
            ToastAlerta("Erro ao atualizar o plano!", "erro")
        }
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    buscarClientes()
  }, [])

  return (
    <div className="pl-40 min-h-[calc(100vh-101px)]">
      <button
        onClick={handleBack}
        className="bg-[#006056] text-white py-2 px-4 mt-8 rounded-md hover:bg-teal-700"
      >
        Voltar
      </button>

      <div className="bg-white p-6 rounded-md shadow-md w-96 mt-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Editar Oportunidade</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome da Oportunidade"
            value={plano.nome}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="descricao"
            placeholder="Descrição da Oportunidade"
            value={plano.descricao}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <input
            type="number"
            name="valor"
            placeholder="Valor (R$)"
            value={plano.valor}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <select
            name="status"
            value={plano.status}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          >
            <option value="ABERTA">ABERTA</option>
            <option value="FECHADA">FECHADA</option>
            <option value="PERDIDA">PERDIDA</option>
          </select>

          <select name="id_cliente" className='border p-2 rounded-md'
            onChange={(e) => buscarClientePorId(e.currentTarget.value)}
          >
            {clientes.map((cliente) => (
                <>
                    <option value={cliente.id} selected={plano.cliente?.id == cliente.id ? true : false}>{cliente.nome}</option>
                </>
            ))}
          </select>

          <button type="submit" className="bg-[#006056] text-white py-2 rounded-md hover:bg-teal-700 transition">
            Editar Oportunidae
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditarPlano;