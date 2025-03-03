import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar(){


    return(
        <>
            <nav className="fixed inset-y-0 left-0 bg-[#EEF6F5] nav">
                <div className="h-full flex flex-col justify-between items-center py-8 px-3">
                    <Link to={""} className="flex items-center gap-1">
                        <img src="./public/icons/eye.svg" className="w-8"/>
                        <h1 className="text-xl item-close">Opportune</h1>
                    </Link>
                    <div className="flex flex-col gap-6">
                        <Link to={""} className="flex items-end gap-1 p-4 hover:bg-[#99B8BA] hover:rounded-lg">
                            <img src="./public/icons/person2.svg" className="w-7"/>
                            <p className="item-close">Clientes</p>
                        </Link>
                        <Link to={""} className="flex items-end gap-1 p-4 hover:bg-[#99B8BA] hover:rounded-lg">
                            <img src="./public/icons/hand.svg" className="w-6"/>
                            <p className="item-close">Planos</p>
                        </Link>
                        <Link to={""} className="flex items-end gap-1 p-4 hover:bg-[#99B8BA] hover:rounded-lg">
                            <img src="./public/icons/building.svg" className="w-6"/>
                            <p className="item-close">Empresa</p>
                        </Link>
                        <Link to={""} className="flex items-end gap-1 p-4 hover:bg-[#99B8BA] hover:rounded-lg">
                            <img src="./public/icons/building.svg" className="w-6"/>
                            <p className="item-close">Opção 4</p>
                        </Link>
                        <Link to={""} className="flex items-end gap-1 p-4 hover:bg-[#99B8BA] hover:rounded-lg">
                            <img src="./public/icons/coffee.svg" className="w-6"/>
                            <p className="item-close">Sobre</p>
                        </Link>
                    </div>
                    <Link to={""} className="flex items-center gap-1 p-4 hover:bg-[#99B8BA] hover:rounded-lg">
                        <img src="./public/icons/exit.svg" className="w-6"/>
                        <p className="item-close">Sair</p>
                    </Link>
                </div>
            </nav>
        </>
    );
}