import { ArrowRight } from "lucide-react"

function Inicio() {
    return (
        <div className="bg-cover bg-center" style={{
            height: "calc(100vh - 72px)",
            backgroundImage: "url('/fondoInicio.png')",
        }}>
            <div className="flex h-full flex-col justify-between pl-5">
                <div></div>
                <div className="gap-4">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-[#0465F1] ">DESARROLLO WEB PROFESIONAL</h3>
                            <h1 className="text-[#EAE9E9] text-6xl font-bold">Páginas web que <br /><span className="text-[#0465F1]">impulsan</span> tu negocio</h1>
                            <p className="text-[#D1D5DB] text-lg">Diseñamos y desarrollamos sitios web modernos,<br /> rápidos y adaptados
                                a todos los disporitivos para <br /> que tu negocio crezca en internet.
                            </p>
                            <div className="flex gap-10">
                                <button className="flex items-center gap-1 bg-[#0465F1] rounded-lg py-4 px-4 
                                text-[#EEEEEE] cursor-pointer">
                                    Ver planes y precios <span><ArrowRight className="h-5 w-auto" /></span>
                                </button>
                                <button className="border-[#EAE9E9] border-2 rounded-lg text-[#EEEEEE] px-4
                                cursor-pointer">
                                    Ver proyectos
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex gap-15 items-center
                text-[#EAE9E9] text-2xl shadow-py py-7 font-bold">
                    <h1>Empresas que <br /> conectan con nosotros</h1>
                    <a href="https://filldgap.com/">
                    <img src="/fillDGapLogo.svg" alt="FILL D GAP" 
                    className="h-20 w-auto opacity-90 hover:opacity-110 transition-all duration-300" />
                    </a>
                    
                    <img src="/LogoRectangular.svg" alt="Panamá Viajero" className="h-15 w-auto" />
                </div>
            </div>
        </div>
    )
} export default Inicio