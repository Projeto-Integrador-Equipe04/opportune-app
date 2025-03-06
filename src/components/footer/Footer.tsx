import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Footer(){
    const { empresa } = useContext(AuthContext)
    const token = empresa?.token;

    if (!token) return <></>

    const data = new Date().getFullYear();
    
    return(
        <>
            <footer className="relative top-0 left-20 w-[calc(100%-5rem)] h-[101px] bg-[#073331] text-white text-lg flex justify-center items-center px-6">
                <p>Todos os direitos reservados | Copyright: {data}</p>
            </footer>
        </>
    );
}