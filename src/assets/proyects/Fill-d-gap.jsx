import { ArrowRight } from "lucide-react"
function FillDGap() {
    return (
        <div className="rounded-xl border border-[#EAE9E9]/25 max-w-md bg-gradient-to-r from-[#E9478F] to-[#EAE9E9]">
            <div className="p-3 rounded-t-xl">
                <img src="/images/FillDGap/fillDGapLogo.svg" alt="Logo Panama Viajero" className="h-10 w-auto" />
                <div className="flex items-center gap-2">
                    {/* Captura */}
                    <img src="/images/Panama-viajero/PanamaViajero.svg" alt="Captura de la pagina" className="h-25 w-auto" />
                    <div className="flex flex-col gap-3 text-[#111111]">
                        <h1 className="font-host font-bold text-xl max-w-[200px] leading-none">Cubrimos vacantes temporales con talento experto</h1>
                        <p className="text-xs font-inter">Somos una comunidad de profesionales independientes con vocación y trayectoria.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#060D17]  py-3 rounded-b-xl px-3">
                <div className="flex gap-3">
                    <img src="/images/Panama-viajero/LogoCuadrado.svg" alt="Logo" className="h-10 w-auto" />
                    <div>
                        <h1 className="font-bold text-xl">FILL D GAP</h1>
                        <p className="font-inter text-[#EAE9E9]/75 text-xs">Plataforma digital que conecta viajeros con
                            los mejores destinos, hospedajes, restaurantes y experiencias de Panamá.</p>
                    </div>
                </div>
                <a href="" className="flex gap-2 font-inter text-sm items-center mt-2 cursor-pointer hover:bg-[#0465F1]/15 
                text-[#0465F1] hover:text-[#EAE9E9] rounded-md max-w-[150px] pl-2 py-1 transition-all duration-300">
                    Visitar página <ArrowRight />
                </a>

            </div>
        </div>
    )
} export default FillDGap