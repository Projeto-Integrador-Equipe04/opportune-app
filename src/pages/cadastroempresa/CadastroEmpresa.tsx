import { useState, useEffect, ChangeEvent, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Empresa from "../../model/Empresa";
import "./Cadastroempresa.css";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { AuthContext } from "../../contexts/AuthContext";

function CadastroEmpresa() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  //   const { handleRegister } = useAuth();
  const { handleRegister } = useContext(AuthContext);

  const [empresa, setEmpresa] = useState<Empresa>({
    // id: 0,
    nome: "",
    cpnj: "",
    email: "",
    senha: "",
    data: "",
    // plano: { id: 0, nome: '', descricao: '', status: '', valor: 0, data: new Date(), empresa: [], cliente: [] },
  });

  useEffect(() => {
    if (empresa.id) {
      retornar();
    }
  }, [empresa]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setEmpresa({
      ...empresa,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovaEmpresa(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === empresa.senha && empresa.senha.length >= 8) {
      setIsLoading(true);

      try {
        await handleRegister(empresa);
        ToastAlerta("Empresa cadastrada com sucesso!", "sucesso");
        alert("Empresa cadastrada com sucesso!");
        navigate("/login");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar a empresa!", "erro");
      }
    } else {
      ToastAlerta(
        "Dados estão inconsistentes. Verifique as informações do cadastro",
        "erro"
      );
      setEmpresa({ ...empresa, senha: "" });
      setConfirmaSenha("");
    }

    setIsLoading(false);
  }

  return (
    <div className="container">
      <div className="fundo"></div>
      <div className="cadastro-container">
        <h2
          style={{
            marginBottom: "20px",
            color: "#023d37",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Cadastrar Empresa
        </h2>
        <form onSubmit={(e) => cadastrarNovaEmpresa(e)}>
          <div className="form-group">
            <label>Nome da Empresa</label>
            <input
              type="text"
              name="nome"
              value={empresa.nome}
              onChange={atualizarEstado}
              required
            />
          </div>
          <div className="form-group">
            <label>CNPJ</label>
            <input
              type="text"
              name="cpnj"
              value={empresa.cpnj}
              onChange={atualizarEstado}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={empresa.email}
              onChange={atualizarEstado}
              required
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              value={empresa.senha}
              onChange={atualizarEstado}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirme a Senha</label>
            <input
              type="password"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
              required
            />
          </div>
          {/* <div className="form-group">
            <label>Plano</label>
            <input
              type="text"
              name="nome"
              value={empresa.plano.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmpresa({
                  ...empresa,
                  plano: { ...empresa.plano, nome: e.target.value },
                })
              }
              required
            />
          </div> */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: isHovered ? "#0fa89a" : "#15cebb",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Cadastrar</span>
            )}
          </button>
        </form>
        <p>
          Já tem uma conta? <a href="/login">Faça login</a>
        </p>
      </div>
    </div>
  );
}

export default CadastroEmpresa;
