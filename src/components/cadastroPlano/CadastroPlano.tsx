import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CadastroPlano = () => {
  const [plano, setPlano] = useState({
    nome: "",
    descricao: "",
    status: true,  
    valor: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPlano({ ...plano, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/plano", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plano),
    });

    if (response.ok) {
      alert("Plano cadastrado com sucesso!");
      setPlano({ nome: "", descricao: "", status: true, valor: "" });
      navigate("/"); 
    } else {
      alert("Erro ao cadastrar o plano.");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 bg-[#006056] text-white py-2 px-4 rounded-md hover:bg-teal-700 transition"
      >
        Voltar
      </button>

      <div className="bg-white p-6 rounded-md shadow-md w-96 mt-16">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Cadastro de Plano</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome do Plano"
            value={plano.nome}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="descricao"
            placeholder="Descrição do Plano"
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
            value={plano.status ? "true" : "false"}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          >
            <option value="true">Ativo</option>
            <option value="false">Inativo</option>
          </select>
          <button type="submit" className="bg-[#006056] text-white py-2 rounded-md hover:bg-teal-700 transition">
            Cadastrar Plano
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroPlano;
