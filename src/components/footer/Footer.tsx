export default function Footer(){
    
    const data = new Date().getFullYear();
    
    return(
        <>
            <footer className="relative -z-10 top-0 left-20 w-[calc(100%-5rem)] h-[101px] bg-[#073331] text-white text-lg flex justify-center items-center px-6">
                <p>Todos os direitos reservados | Copyright: {data}</p>
            </footer>
        </>
    );
}