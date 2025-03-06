import { Link } from "react-router-dom";

import logo from "../../../public/image/Logo.svg"
import home from "../../../public/image/bg-home.jpg"

export default function Home(){
    return(
        <>
        <main className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
            <div className="relative flex items-center justify-center bg-[url(${home})] bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="p-10 flex flex-row">
                    <div>
                        <img className="w-72" src={logo} alt="" />
                        <p className="text-[#4D4B4B] font-semibold text-[16px] mx-4 opacity-54 font-sans mt-0">O melhor CRM para seu negócio! </p>
                    </div>
                </div>
                <div className="flex-1 content-center">
                    <div className="flex flex-col items-center gap-3 -mt-35">
                        <Link to="/login" className="font-semibold text-2xl w-80 py-3 h-15 bg-[#006056] text-white rounded-xl text-center content-center">
                            Login
                        </Link>
                        <Link to="/cadastroempresa" className="font-semibold text-2xl py-3 w-80 h-15 bg-[#878787] text-white rounded-xl text-center content-center">
                            Cadastrar
                        </Link>
                    </div>
                </div> 
            </div>
        </main>
        </>
    );
}