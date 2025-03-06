import { Link, Location} from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import eye from "../../../public/icons/eye.svg"
import home from "../../../public/icons/home.svg"
import person from "../../../public/icons/person2.svg"
import hand from "../../../public/icons/hand.svg"
import building from "../../../public/icons/building.svg"
import coffee from "../../../public/icons/coffee.svg"
import exit from "../../../public/icons/exit.svg"

export default function Navbar(){
    const { empresa, handleLogout } = useContext(AuthContext)
    const token = empresa?.token;

    if (!token) return <></>
    
    return(
        <>
            <nav className="fixed z-[9999] inset-y-0 left-0 bg-[#EEF6F5] nav">
                <div className="h-full flex flex-col justify-between items-center py-8 px-3">
                    <Link to={"/dashboard"} className="flex items-end hover:decoration-transparent">
                        <img src={eye} className="w-7"/>
                        <h1 className="text-2xl item-close text-black">pportune</h1>
                    </Link>
                    <div className="flex flex-col gap-6">
                        <Link to={"/dashboard"} className="flex items-end gap-1 p-4 text-black hover:bg-[#99B8BA] hover:rounded-lg hover:text-black">
                            <img src={home} className="w-7"/>
                            <p className="item-close">Dashboard</p>
                        </Link>
                        <Link to={"/clientes"} className="flex items-end gap-1 p-4 text-black hover:bg-[#99B8BA] hover:rounded-lg hover:text-black">
                            <img src={person} className="w-7"/>
                            <p className="item-close">Clientes</p>
                        </Link>
                        <Link to={"/planos"} className="flex items-end gap-1 p-4 text-black hover:bg-[#99B8BA] hover:rounded-lg hover:text-black">
                            <img src={hand} className="w-6"/>
                            <p className="item-close">Planos</p>
                        </Link>
                        <Link to={"/perfil-empresa"} className="flex items-end gap-1 p-4 text-black hover:bg-[#99B8BA] hover:rounded-lg hover:text-black">
                            <img src={building} className="w-6"/>
                            <p className="item-close">Empresa</p>
                        </Link>
                        <Link to={"/sobre"} className="flex items-end gap-1 p-4 text-black hover:bg-[#99B8BA] hover:rounded-lg hover:text-black">
                            <img src={coffee} className="w-6"/>
                            <p className="item-close">Sobre</p>
                        </Link>
                    </div>
                    <Link to={"/login"}  onClick={handleLogout} className="flex items-end gap-1 py-4 text-black px-8 hover:bg-[#99B8BA] hover:rounded-lg">
                        <img src={exit} className="w-6"/>
                        <p className="item-close">Sair</p>
                    </Link>
                </div>
            </nav>
        </>
    );
}