import { ArrowRight } from "lucide-react"
function PanamaViajero() {
    return (
        <div className="rounded-2xl max-w-md bg-gradient-to-r from-[#060D17] to-[#4956A2]">
            <div className="p-3 rounded-t-xl hover:scale-103 transition-all duration-300">
                <a href="https://panama-viajero.pages.dev" className="flex items-center justify-center gap-2 cursor-pointer">
                    {/* LOGO */}
                    <img src="/images/Panama-viajero/LogoRectangular.svg" alt="Captura de la pagina" className="h-15 md:h-25 w-auto my-10" />
                </a>
            </div>
            <div className="bg-[#060D17] py-2 rounded-b-xl px-3">
                <div className="flex gap-3">
                    <div>
                        <h1 className="font-bold text-xl">Panamá Viajero</h1>
                        <p className="font-inter text-[#EAE9E9]/75 text-xs">Plataforma digital que conecta viajeros con
                            los mejores destinos, hospedajes, restaurantes y experiencias de Panamá.</p>
                    </div>
                </div>
                <a href="https://panama-viajero.pages.dev" className="flex gap-2 font-inter text-sm items-center mt-2 cursor-pointer hover:bg-[#0465F1]/15 
                text-[#0465F1] hover:text-[#EAE9E9] rounded-md max-w-[150px] pl-2 py-1 transition-all duration-300">
                    Visitar página <ArrowRight />
                </a>
            </div>
        </div>
    )
} export default PanamaViajero