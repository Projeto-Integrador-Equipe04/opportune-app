import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import CadastroCliente from "./components/cadastroCliente/CadastroCliente";
import CadastroPlano from "./components/cadastroPlano/CadastroPlano";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
        <Route path="/cadastro-plano" element={<CadastroPlano />} />
      </Routes>
    </Router>
  );
}

export default App;
