import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CadastroCliente = () => {
  const [cliente, setCliente] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    endereco: "",
    foto: null as File | null,
    email: "",
    senha: "",
    plano: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCliente({ ...cliente, foto: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cliente cadastrado:", cliente);
    alert("Cliente cadastrado com sucesso!");
    setCliente({
      nome: "",
      cpf: "",
      telefone: "",
      endereco: "",
      foto: null,
      email: "",
      senha: "",
      plano: "",
    });
  };

  const handleBack = () => {
    navigate("/dashboard"); 
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
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Cadastro de Cliente</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={cliente.nome}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={cliente.cpf}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
            maxLength={11}
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={cliente.telefone}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="endereco"
            placeholder="Endereço"
            value={cliente.endereco}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <input
            type="file"
            name="foto"
            accept="image/*"
            onChange={handleFileChange}
            className="border p-2 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={cliente.email}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={cliente.senha}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <select
            name="plano"
            value={cliente.plano}
            onChange={handleChange}
            className="border p-2 rounded-md"
          >
            <option value="">Selecione um Plano (opcional)</option>
            <option value="Básico">Básico</option>
            <option value="Padrão">Padrão</option>
            <option value="Premium">Premium</option>
          </select>
          <button type="submit" className="bg-[#006056] text-white py-2 rounded-md hover:bg-teal-700 transition">
            Cadastrar Cliente
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroCliente;