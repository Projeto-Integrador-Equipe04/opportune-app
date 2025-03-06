import { Link, Location} from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Navbar(){
    const { empresa, handleLogout } = useContext(AuthContext)
    const token = empresa?.token;

    if (!token) return <></>
    
    return(
        <>
            <nav className="fixed z-[9999] inset-y-0 left-0 bg-[#EEF6F5] nav">
                <div className="h-full flex flex-col justify-between items-center py-8 px-3">
                    <Link to={"/dashboard"} className="flex items-end">
                        <img src="./public/icons/eye.svg" className="w-7"/>
                        <h1 className="text-2xl item-close">pportune</h1>
                    </Link>
                    <div className="flex flex-col gap-6">
                        <Link to={"/clientes"} className="flex items-end gap-1 p-4 hover:bg-[#99B8BA] hover:rounded-lg">
                            <img src="./public/icons/person2.svg" className="w-7"/>
                            <p className="item-close">Clientes</p>
                        </Link>
                        <Link to={"/planos"} className="flex items-end gap-1 p-4 hover:bg-[#99B8BA] hover:rounded-lg">
                            <img src="./public/icons/hand.svg" className="w-6"/>
                            <p className="item-close">Planos</p>
                        </Link>
                        <Link to={"/perfil-empresa"} className="flex items-end gap-1 p-4 hover:bg-[#99B8BA] hover:rounded-lg">
                            <img src="./public/icons/building.svg" className="w-6"/>
                            <p className="item-close">Empresa</p>
                        </Link>
                        <Link to={"/dashboard"} className="flex items-end gap-1 p-4 hover:bg-[#99B8BA] hover:rounded-lg">
                            <img src="./public/icons/building.svg" className="w-6"/>
                            <p className="item-close">Dashboard</p>
                        </Link>
                        <Link to={"/sobre"} className="flex items-end gap-1 p-4 hover:bg-[#99B8BA] hover:rounded-lg">
                            <img src="./public/icons/coffee.svg" className="w-6"/>
                            <p className="item-close">Sobre</p>
                        </Link>
                    </div>
                    <Link to={"/login"}  onClick={handleLogout} className="flex items-center gap-1 py-4 px-8 hover:bg-[#99B8BA] hover:rounded-lg">
                        <img src="./public/icons/exit.svg" className="w-6"/>
                        <p className="item-close">Sair</p>
                    </Link>
                </div>
            </nav>
        </>
    );
}