import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginempresa from './pages/loginempresa/Loginempresa';
import Cadastroempresa from './pages/cadastroempresa/CadastroEmpresa';

const App = () => {
    return (
        <Router>
            <Routes>
                {}
                <Route path="/loginempresa" element={<Loginempresa />} />

                {}
                <Route path="/cadastroempresa" element={<Cadastroempresa />} />

                {}
                <Route path="/" element={<Loginempresa />} />
            </Routes>
        </Router>
    );
};

export default App;