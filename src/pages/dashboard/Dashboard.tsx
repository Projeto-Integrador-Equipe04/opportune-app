import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imgHello from "../../assets/imgs/imgHello.png";
import SecaoPlanos from "../../components/secao-planos/SecaoPlanos";
import SecaoClientes from "../../components/secao-clientes/SecaoClientes";

const Dashboard = () => {
  const [empresa, setEmpresa] = useState<{ nome: string }>({ nome: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmpresa = async () => {
      try {
        const response = await axios.get("https://opportune-dthx.onrender.com/empresa");
        setEmpresa(response.data);  
      } catch (error) {
        console.error("Erro ao buscar dados da empresa", error);
      }
    };
    fetchEmpresa();
  }, []);

  const handleClick = () => {
    navigate("/perfil-empresa");
  };

  return (
    <div className="flex w-screen h-screen bg-gray-100 pl-8">
      

      <main className="flex-1 flex flex-col">
        <header className="fixed top-0 left-20 w-[calc(100%-5rem)] h-[101px] bg-[#006056] text-white flex justify-between items-center px-6">
          <h1 className="text-4xl font-semibold font-serif ml-11">Dashboard</h1>
          <span
            onClick={handleClick}
            className="cursor-pointer text-2xl font-serif hover:not-focus:bg-teal-100 transform rounded-md py-2 px-2 hover:text-[#006056] font-semibold"
          >
            {empresa.nome || "Usuário..."} 
          </span>
        </header>

        <div className="pt-[101px] p-6 ml-32">
        <div className="pt-[101px] p-6 ml-32 flex space-x-8">
          
      <section className=" bg-teal-100 p-8 rounded-md shadow-md h-70 w-[500px] ml-[-155px] flex justify-between items-center mr-10 mt-[-60px]">
        <p className="text-gray-700 font-semibold text-2xl font-serif">Hello {empresa.nome || "Usuário"}</p>
        <img src={imgHello} alt="Hello Image" className="w-64 h-auto object-contain -mr-10" />
      </section>

      <div className="flex flex-col space-y-4 justify-center">
      <button
      onClick={() => navigate("/cadastro-cliente")}
      className="bg-[#006056] text-white py-2 px-4 rounded-md hover:bg-teal-700 transition min-w-[200px] h-12 text-center"
      >
      Cadastrar Cliente
      </button>

      <button
      onClick={() => navigate("/cadastro-plano")}
      className="bg-[#006056] text-white py-2 px-4 rounded-md hover:bg-teal-700 transition min-w-[200px] h-12 text-center"
      >
      Cadastrar Plano
      </button>
      </div>
    </div>


          <div className="flex flex-col gap-4 items-center pt-5">
          <div className="flex space-x-4">
          

</div>



        </div>

          <SecaoClientes />

          <SecaoPlanos />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;