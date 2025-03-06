import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { EmpresaLogin } from "../../model/EmpresaLogin";
import { Link, useNavigate } from "react-router-dom";
import { buscar } from "../../services/Service";


export default function CardPerfilEmpresa() {
  const { empresa } = useContext(AuthContext); 
  const token = empresa?.token
  const [empresaData, setEmpresaData] = useState<EmpresaLogin | null>(null); 
  const navigate = useNavigate();

  async function buscarEmpresa() {
    try {
      if (empresa?.id) {
        
  
        if (!token) {
          console.error("Erro: Token não encontrado");
          alert("Você precisa estar logado!");
          return;
        }
  
        await buscar(`/empresa/${empresa.id}`, setEmpresaData, {
          headers: {
            Authorization: token
          },
        });
      }
    } catch (error: any) {
      console.error("Erro ao buscar empresa:", error);
      if (error?.response?.status === 401) {
        alert("Erro de autenticação. O token pode estar inválido ou expirado.");
      } else {
        alert("Não foi possível buscar a empresa. Tente novamente.");
      }
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
<<<<<<< HEAD
  <div className="flex justify-center w-full pt-10">
=======
  <div className="flex justify-center w-full pt-10"> 
>>>>>>> teste
  {!empresaData && (
          <div className="text-center py-4 text-xl">Carregando dados da empresa...</div>
        )}
      </div>
      <div className="flex justify-center w-full h-full pb-[183px]">
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
              to={`/editar-perfil/${empresaData?.id}`}
              className="w-full text-white bg-black hover:underline flex items-center justify-center py-2"
            >
              <button>Editar</button>
            </Link>

            <Link
              to={`/deletar-perfil/${empresaData?.id}`}
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