import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import CadastroCliente from "./components/cadastroCliente/CadastroCliente";
import Dashboard from "./pages/dashboard/Dashboard";
import CadastroPlano from "./components/cadastroPlano/CadastroPlano";
import Loginempresa from "./pages/loginempresa/Loginempresa";
import Cadastroempresa from "./pages/cadastroempresa/CadastroEmpresa";
import Sobre from "./pages/sobre/Sobre";
import PerfilEmpresa from "./pages/perfil/PerfilEmpresa";
import Footer from "./components/footer/Footer";
import Planos from "./pages/plano/Planos";
import Clientes from "./pages/cliente/Cliente";

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
            <Route path="/cadastro-plano" element={<CadastroPlano />} />
            <Route path="/login" element={<Loginempresa />} />
            <Route path="/cadastroempresa" element={<Cadastroempresa />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/perfil-empresa" element={<PerfilEmpresa />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/clientes" element={<Clientes />} />
            </Routes>
        <Footer  />
        </AuthProvider>
      </BrowserRouter>
    </>
  );}
