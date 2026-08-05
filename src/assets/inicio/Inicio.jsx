import { ArrowRight } from "lucide-react"

function Inicio() {
    return (
        <div className="bg-cover bg-center" style={{
            height: "calc(100vh - 72px)",
            backgroundImage: "url('/fondoInicio.png')",
        }}>
            <div className="flex h-full flex-col justify-between pl-5 ">
                <div></div>
                <div className="flex justify-between z-10">
                    <div className="flex flex-col md:gap-5 gap-3">
                        <div>
                            <h3 className="text-[#0465F1] text-sm md:text-md">DESARROLLO WEB PROFESIONAL</h3>
                            <h1 className="text-[#EAE9E9] text-4xl md:text-6xl font-bold font-host">Páginas web que <br /><span className="text-[#0465F1]">impulsan</span> tu negocio</h1>
                        </div>
                        <p className="text-[#D1D5DB] text-md md:text-lg font-inter">Diseñamos y desarrollamos sitios web modernos,<br /> rápidos y adaptados
                            a todos los disporitivos para <br /> que tu negocio crezca en internet.
                        </p>
                        <div className="md:gap-5 flex flex-col md:flex-row  gap-3 items-start font-host">
                            <button className="flex items-center gap-1 bg-[#0465F1] rounded-lg py-4 px-4 
                                text-[#EEEEEE] cursor-pointer">
                                Ver planes y precios <span><ArrowRight className="h-5 w-auto" /></span>
                            </button>
                            <button className="border-[#EAE9E9] border-2 rounded-lg text-[#EEEEEE] py-4 px-4
                                cursor-pointer">
                                Ver proyectos
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-[#EAE9E9] lg:text-2xl md:text-xl text-md z-30 md:flex gap-15 py-4 md:py-7 font-bold mr-3 ">{/*
                */}
                    <h1 className="mb-3 opacity-90">Empresas que <br /> confian en nosotros</h1>
                    <div className="flex gap-10">
                    <a href="https://filldgap.com/">
                        <img src="/fillDGapLogo.svg" alt="FILL D GAP"
                            className="h-20 w-auto opacity-90 hover:scale-105 transition-all duration-300" />
                    </a>
                    <a href="https://panama-viajero.pages.dev/">
                        <img src="/LogoRectangular.svg" alt="Panamá Viajero"
                            className="h-15 w-auto opacity-90 hover:scale-105 transition-all duration-300 opacity-80" />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
} export default Inicio