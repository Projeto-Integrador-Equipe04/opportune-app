import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import CadastroCliente from "./components/cadastroCliente/CadastroCliente";
import Dashboard from "./pages/dashboard/Dashboard";
import Loginempresa from "./pages/loginempresa/Loginempresa";
import Cadastroempresa from "./pages/cadastroempresa/CadastroEmpresa";
import Sobre from "./pages/sobre/Sobre";
import PerfilEmpresa from "./pages/perfil/PerfilEmpresa";
import Footer from "./components/footer/Footer";
import DeletarCliente from "./components/secao-clientes/deletarCliente/DeletarClientes";
import EditarCliente from "./components/secao-clientes/editarCliente/EditarCliente";
import SecaoClientes from "./components/secao-clientes/SecaoClientes";
import Clientes from "./pages/cliente/Cliente";
import Planos from "./pages/plano/Planos";



export default function App() {
  return (
    <>
      <BrowserRouter>
          <AuthProvider> 
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/cadastro-cliente" element={<CadastroCliente />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/login" element={<Loginempresa />} />
            <Route path="/cadastroempresa" element={<Cadastroempresa />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/perfil-empresa" element={<PerfilEmpresa />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/deletarCliente/:id" element={<DeletarCliente/>}/>
            <Route path="/cliente/${id}" element={<EditarCliente/>}/>
            <Route path="/clientes" element={<Clientes/>}/>
            

            </Routes>
        <Footer  />
        </AuthProvider>
      </BrowserRouter>
    </>
  );}
