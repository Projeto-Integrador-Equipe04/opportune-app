import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Cliente from "../../../model/Cliente";

const EditarCliente = () => {
  const [cliente, setCliente] = useState<Cliente>()
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [clienteData, setClienteData] = useState({
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

  async function buscarClientePorId(id: string) {
    try {
        await buscar(`/cliente/${id}`, setClienteData, {
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
    if (id !== undefined) buscarClientePorId(id)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setClienteData({ ...clienteData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      clienteData.id = Number(id)

      if (cliente) {
        clienteData.cliente = cliente
      }

      await atualizar(`/cliente`, clienteData, setClienteData, {
          headers: {
              Authorization: token,
          },
      });

      ToastAlerta("Cliente atualizado com sucesso!", "sucesso")
      navigate(-1)
    } catch (error: any) {
        if (error.toString().includes('403')) {
            handleLogout()
        } else {
            ToastAlerta("Erro ao atualizar o cliente!", "erro")
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
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Editar Cliente</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome do Cliente"
            value={clienteData.nome}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="descricao"
            placeholder="Descrição do Cliente"
            value={clienteData.descricao}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <input
            type="number"
            name="valor"
            placeholder="Valor (R$)"
            value={clienteData.valor}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <select
            name="status"
            value={clienteData.status}
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
                    <option value={cliente.id} selected={clienteData.cliente?.id == cliente.id ? true : false}>{cliente.nome}</option>
                </>
            ))}
          </select>

          <button type="submit" className="bg-[#006056] text-white py-2 rounded-md hover:bg-teal-700 transition">
            Editar Cliente
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditarCliente;
