import {  Routes, Route, BrowserRouter } from "react-router-dom";
import CadastroCliente from "./components/cadastroCliente/CadastroCliente";
import CadastroPlano from "./components/cadastroPlano/CadastroPlano";
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Dashboard from "./pages/dashboard/Dashboard";
import Loginempresa from "./pages/loginempresa/Loginempresa";
import Cadastroempresa from "./pages/cadastroempresa/CadastroEmpresa";
import Planos from "./pages/plano/Planos";

export default function App() {
  return (
    <>
      <BrowserRouter>
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
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )

}

