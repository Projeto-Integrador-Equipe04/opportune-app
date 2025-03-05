import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import CadastroCliente from "./components/cadastroCliente/CadastroCliente";
import CadastroPlano from "./components/cadastroPlano/CadastroPlano";
import PerfilEmpresa from "./pages/perfil/PerfilEmpresa";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
        <Route path="/cadastro-plano" element={<CadastroPlano />} />
        <Route path="/perfil-empresa" element={<PerfilEmpresa />} />
      </Routes>
    </Router>
  );
}

export default App;
