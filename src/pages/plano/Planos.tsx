import { useNavigate } from "react-router-dom";
import SecaoPlanos from "../../components/planos/SecaoPlanos";

const Planos = () => {
    const navigate = useNavigate()
    return <div className="mt-8 pl-40 min-h-[calc(100vh-101px)]">
        <button
          onClick={() => navigate("/planos-cadastrar")}
          className="bg-[#006056] text-white py-2 px-4 rounded-md hover:bg-teal-700 transition min-w-[200px] h-12 text-center"
        >
          Cadastrar Oportunidade
        </button>
        <SecaoPlanos />
    </div>
}

export default Planos;