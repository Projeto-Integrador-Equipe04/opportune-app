export default function Footer(){
    
    const data = new Date().getFullYear();
    
    return(
        <>
            <footer className="relative -z-10 left-20 ml-1 w-full flex justify-center p-10 bg-[#99B8BA]">
                <p>Todos os direitos reservados | Copyright: {data}</p>
            </footer>
        </>
    );
}