import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PerfilEmpresa = () => {
  const [empresa, setEmpresa] = useState<{ nome: string; descricao: string; categoria: string; id: string }>({
    nome: "",
    descricao: "",
    categoria: "",
    id: "",
  });
  const [isLoading, setIsLoading] = useState(true);  // Estado de carregamento
  const [error, setError] = useState<string | null>(null);  // Estado de erro
  const navigate = useNavigate();
  const API_URL = "https://opportune-dthx.onrender.com/empresa";

  useEffect(() => {
    const fetchEmpresa = async () => {
      try {
        const response = await axios.get(API_URL);
        setEmpresa(response.data);
      } catch (error) {
        setError("Erro ao buscar dados da empresa.");
        console.error(error);
      } finally {
        setIsLoading(false);  // Fim do carregamento
      }
    };
    fetchEmpresa();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmpresa({ ...empresa, nome: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${empresa.id}`, { nome: empresa.nome });
      alert("Nome da empresa atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar o nome da empresa", error);
      setError("Erro ao atualizar os dados da empresa.");
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Tem certeza que deseja excluir a empresa?");
    if (confirm) {
      try {
        await axios.delete(`${API_URL}/${empresa.id}`);
        alert("Empresa excluída com sucesso!");
        navigate("/dashboard"); // Redirecionar para o dashboard
      } catch (error) {
        console.error("Erro ao excluir a empresa", error);
        setError("Erro ao excluir a empresa.");
      }
    }
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-4 left-4 bg-[#006056] text-white py-2 px-4 rounded-md hover:bg-teal-700 transition"
      >
        Voltar
      </button>

      <div className="bg-white p-6 rounded-md shadow-md w-96 mt-16">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Perfil da Empresa</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>} 

        <div className="mb-4">
          <p><strong>Nome:</strong> {empresa.nome}</p>
          <p><strong>Descrição:</strong> {empresa.descricao}</p>
          <p><strong>Categoria:</strong> {empresa.categoria}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome da Empresa"
            value={empresa.nome}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <button type="submit" className="bg-[#006056] text-white py-2 rounded-md hover:bg-teal-700 transition">
            Atualizar Nome
          </button>
        </form>

        <button
          onClick={handleDelete}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
        >
          Excluir Empresa
        </button>
      </div>
    </div>
  );
};

export default PerfilEmpresa;
