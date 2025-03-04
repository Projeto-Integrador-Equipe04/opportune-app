import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginempresa from './pages/loginempresa/Loginempresa';
import Cadastroempresa from './pages/cadastroempresa/CadastroEmpresa';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Rota para a página de login */}
                <Route path="/loginempresa" element={<Loginempresa />} />

                {/* Rota para a página de cadastro */}
                <Route path="/cadastroempresa" element={<Cadastroempresa />} />

                {/* Rota padrão (pode redirecionar para login ou outra página inicial) */}
                <Route path="/" element={<Loginempresa />} />
            </Routes>
        </Router>
    );
};

export default App;