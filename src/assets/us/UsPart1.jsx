import { Goal, CodeXml, User, Pencil } from "lucide-react"

function UsPart1 (){
    return (
        <div id="conocenos" className="bg-[#060D17] px-10 flex flex-col gap-10 py-10 scroll-mt-[125px]">
            <div className="text-center text-[#EAE9E9] flex flex-col gap-3">
                <h1 className="font-host font-bold text-2xl">¿Por qué elegir NEX DIGITAL?</h1>
                <p className="font-inter text-[#D1D5DB]">Combinamos diseño, tecnología y estrategia para crear sitios 
                    web que no solo se ven bien, <br /> si no que también generan 
                    resultados
                </p>
            </div>
            {/* Cuadros */}
            <div className="text-[#EEEEEE] flex flex-col md:flex-row md:justify-between items-center gap-10 pb-5 items-stretch">
                {/* Cuadro 1 */}
                <div className="bg-[#0D1520] rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0465F1]/15">
                        <Goal className="h-8 w-8 text-[#0465F1]" />
                    </div>
                    <div className="flex flex-col gap-2 max-w-xs">
                        <h2 className="font-host font-bold text-xl">Enfocados en resultados</h2>
                        <p className="font-inter text-sm text-[#D1D5DB]">Creamos sitios pensados para atraer clientes y hacer crecer tu negocio</p>
                    </div>
                </div>
                {/* Cuadro 2 */}
                <div className="bg-[#0D1520] rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0465F1]/15">
                        <CodeXml className="h-8 w-8 text-[#0465F1]" />
                    </div>
                    <div className="flex flex-col gap-2 max-w-xs">
                        <h2 className="font-host font-bold text-xl">Tecnología moderna</h2>
                        <p className="font-inter text-sm text-[#D1D5DB]">Utilizamos las mejores herramientas para garantizar velocidad, seguridad y calidad</p>
                    </div> 
                </div>
                {/* Cuadro 3 */}
                <div className="bg-[#0D1520] rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0465F1]/15">
                        <User className="h-8 w-8 text-[#0465F1]" />
                    </div>
                    <div className="flex flex-col gap-2 max-w-xs">
                        <h2 className="font-host font-bold text-xl">Comunicación clara</h2>
                        <p className="font-inter text-sm text-[#D1D5DB]">Te acompañamos en todo el proceso, resolvemos tus dudas y te mantenemos informado</p>
                    </div>
                </div>
                {/* Cuadro 4 */}
                <div className="rounded-xl p-4 bg-[#0D1520] flex flex-col gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0465F1]/15">
                        <Pencil className="h-8 w-8 text-[#0465F1]" />
                    </div>
                    <div className="flex flex-col gap-2 max-w-xs">
                        <h2 className="font-host font-bold text-xl">A tu medida</h2>
                        <p className="font-inter text-sm text-[#D1D5DB]">Cada proyecto es único, por eso nos adaptamos a tus necesidades y objetivos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}export default UsPart1