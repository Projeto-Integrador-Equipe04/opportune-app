import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
        <main className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
            <div className="bg-[url(public/image/fundooportune.png)] bg-no-repeat bg-cover flex items-center justify-center">
                <p>Logo</p>
            </div>
            <div className="flex flex-col justify-center">
                <div className="p-10">
                    <p className="font-semibold my-2 text-[#3B3C3B] text-4xl font-sans">Opportune</p>
                    <p className="text-[#4D4B4B] font-semibold opacity-54 font-sans">O melhor CRM para seu negócio! </p>
                </div>
                <div className="flex-1 content-center">
                    <div className="flex flex-col items-center gap-3 -mt-35">
                        <Link to="/login" className="font-semibold text-2xl w-80 h-15 bg-[#006056] text-white rounded-xl text-center content-center">
                            Login
                        </Link>
                        <Link to="/cadastro" className="font-semibold text-2xl w-80 h-15 bg-[#878787] text-white rounded-xl text-center content-center">
                            Cadastrar
                        </Link>
                    </div>
                </div> 
            </div>
        </main>
        </>
    );
}