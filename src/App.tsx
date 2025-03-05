import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/navbar/Navbar";
import { Home } from "lucide-react";
import CadastroCliente from "./components/cadastroCliente/CadastroCliente";
import Dashboard from "./pages/dashboard/Dashboard";
import CadastroPlano from "./components/cadastroPlano/CadastroPlano";
import Loginempresa from "./pages/loginempresa/Loginempresa";
import Cadastroempresa from "./pages/cadastroempresa/CadastroEmpresa";
import Sobre from "./pages/sobre/Sobre";
import Footer from "./components/footer/Footer";

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
            </Routes>
        <Footer  />
        </AuthProvider>
      </BrowserRouter>
    </>
  );}
