import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscar, cadastrar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Cliente from "../../../model/Cliente";

const CadastrarPlano = () => {
  const [cliente, setCliente] = useState<Cliente>()
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [plano, setPlano] = useState({
    nome: "",
    descricao: "",
    status: "",  
    valor: "",
    empresa: {
      id: 0
    },
    cliente: {
      id: 0
    }
  });

  const navigate = useNavigate();
  const { empresa, handleLogout } = useContext(AuthContext)
  const token = empresa?.token

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPlano({ ...plano, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    plano.empresa.id = Number(empresa?.id)

    if(cliente) {
      plano.cliente.id = cliente?.id
    }

    try {
      await cadastrar(`/plano`, plano, setPlano, {
          headers: {
              Authorization: token,
          },
      });

      ToastAlerta("Plano cadastrado com sucesso!", "sucesso")
      navigate(-1)
    } catch (error: any) {
        if (error.toString().includes('403')) {
            handleLogout()
        } else {
            ToastAlerta("Erro ao cadastrar o plano!", "erro")
        }
    }
  };

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
    buscarClientes()
  }, [])

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="pl-40 my-10 min-h-[calc(100vh-101px)]">
      <button
        onClick={handleBack}
        className="bg-[#006056] text-white py-2 px-4 rounded-md hover:bg-teal-700"
      >
        Voltar
      </button>

      <div className="bg-white p-6 rounded-md shadow-md w-96 mt-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Cadastrar oportunidade</h2>
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
            <option value="">Selecione</option>
            <option value="ABERTA">ABERTA</option>
            <option value="FECHADA">FECHADA</option>
            <option value="PERDIDA">PERDIDA</option>
          </select>

          <select name="id_cliente" className='border p-2 rounded-md'
            onChange={(e) => buscarClientePorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>Selecione um cliente</option>

            {clientes.map((cliente) => (
                <>
                    <option value={cliente.id} >{cliente.nome}</option>
                </>
            ))}
          </select>

          <button type="submit" className="bg-[#006056] text-white py-2 rounded-md hover:bg-teal-700 transition">
            Cadastrar Oportunidade
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarPlano;