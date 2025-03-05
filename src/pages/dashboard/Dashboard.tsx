import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgHello from "../../assets/imgs/imgHello.png";
import SecaoPlanos from "../../components/secao-planos/SecaoPlanos";

const Dashboard = () => {
  const [usuario] = useState("Usuário");
  const navigate = useNavigate(); 

  return (
    <div className="flex w-screen h-screen bg-gray-100 pl-8">
      <aside className="w-20 h-screen bg-[#006056] flex flex-col justify-between p-4">
        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/cadastro-cliente")}
            className="bg-[#006056] text-white py-2 px-4 rounded-md hover:bg-teal-700 transition"
          >
            Cadastrar Cliente
          </button>
          <button
            onClick={() => navigate("/cadastro-plano")}
            className="bg-[#006056] text-white py-2 px-4 rounded-md hover:bg-teal-700 transition"
          >
            Cadastrar Plano
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="fixed top-0 left-20 w-[calc(100%-5rem)] h-[101px] bg-[#006056] text-white flex justify-between items-center px-6">
          <h1 className="text-4xl font-semibold font-serif">Dashboard</h1>
          <span className="cursor-pointer text-2xl font-serif hover:not-focus:bg-teal-100 transform rounded-md py-2 px-2 hover:text-teal-100 font-semibold">
            {usuario}
          </span>
        </header>

        <div className="pt-[101px] p-6">
          <section className="mt-4 bg-teal-100 p-8 rounded-md shadow-md h-72 w-[500px] flex justify-between items-center">
            <p className="text-gray-700 font-semibold text-xl font-serif">Hello {usuario}</p>
            <img src={imgHello} alt="Hello Image" className="w-56 h-auto object-contain -mr-6" />
          </section>


          <section className="mt-6">
            <h2 className="text-lg font-semibold mb-2 font-serif">Clientes Ativos</h2>
            <div className="bg-gray-300 h-25 rounded-md shadow-md"></div>
            <div className="mt-2 bg-gray-300 h-25 rounded-md shadow-md"></div>
          </section>

          <SecaoPlanos />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;