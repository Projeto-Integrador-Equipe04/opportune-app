import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/navbar/Navbar";
import { Home } from "lucide-react";
import CadastroCliente from "./components/cadastroCliente/CadastroCliente";
import Dashboard from "./pages/dashboard/Dashboard";
import CadastroPlano from "./components/cadastroPlano/CadastroPlano";
import Loginempresa from "./pages/loginempresa/Loginempresa";
import Cadastroempresa from "./pages/cadastroempresa/CadastroEmpresa";
import Planos from "./pages/plano/Planos";
import Clientes from "./pages/cliente/Cliente";
import Footer from "./components/footer/Footer";
import CardPerfilEmpresa from "./pages/perfil/CardPerfil";

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
            <Route path="/planos" element={<Planos />} />
            <Route path="/clientes" element={<Clientes/>} />
            <Route path="/perfil-empresa" element={<CardPerfilEmpresa />} />

          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );}
