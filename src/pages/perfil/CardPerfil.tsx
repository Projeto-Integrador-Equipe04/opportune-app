import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { EmpresaLogin } from "../../model/EmpresaLogin";
import { buscar } from "../../services/Service";

export default function CardPerfilEmpresa() {
  const { empresa } = useContext(AuthContext); 
  const [empresaData, setEmpresaData] = useState<EmpresaLogin | null>(null); 
  const navigate = useNavigate();

  async function buscarEmpresa() {
    try {
      if (empresa?.id) {
        await buscar(`/empresas/${empresa.id}`, setEmpresaData, {});
      }
    } catch (error: any) {
      alert(`Não foi possível buscar a empresa: ${empresa?.id}`);
    }
  }

  useEffect(() => {
    if (empresa?.id) {
      buscarEmpresa();
    }
  }, [empresa?.id]);

  useEffect(() => {
    if (!empresa?.id) {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [empresa, navigate]);

  return (
    <>
      <div className="flex justify-center">
        {!empresaData && (
          <div className="text-center py-4 text-xl">Carregando dados da empresa...</div>
        )}
      </div>
      <div className="flex justify-center w-full h-full">
        <div className="flex flex-col rounded-xl shadow-lg overflow-hidden justify-between w-2/6 my-10">
          <header className="py-8 px-6 text-black text-3xl text-center">Perfil da Empresa</header>
          {empresaData ? (
            <>
              <p className="py-4 text-xl text-center h-full">Nome: {empresaData.nome}</p>
              <p className="py-4 text-xl text-center h-full">CNPJ: {empresaData.cnpj}</p>
              <p className="py-4 text-xl text-center h-full">Email: {empresaData.email}</p>
              <p className="py-4 text-xl text-center h-full">Data de Criação: {empresaData.data}</p>
              <p className="py-4 text-xl text-center h-full">Plano: {empresaData.plano}</p>
            </>
          ) : (
            <p className="py-4 text-xl text-center">Carregando dados da empresa...</p>
          )}
          <div className="flex">
            <Link
              to={`/editarperfil/${empresaData?.id}`}
              className="w-full text-white bg-black hover:underline flex items-center justify-center py-2"
            >
              <button>Editar</button>
            </Link>

            <Link
              to={`/deletarperfil/${empresaData?.id}`}
              className="text-black border bg-slate-50 hover:border-red-500 hover:bg-red-500 hover:text-white hover:underline w-full flex items-center justify-center"
            >
              <button>Deletar</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
