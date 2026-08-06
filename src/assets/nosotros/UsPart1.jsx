import { Goal, CodeXml, User, PencilLine } from "lucide-react"

function UsPart1 (){
    return (
        <div className="bg-[#060D17] px-10 flex flex-col gap-10 py-10">
            <div className="text-center text-[#EAE9E9] flex flex-col gap-3">
                <h1 className="font-host font-bold text-xl">¿Por qué elegir NEX DIGITAL?</h1>
                <p className="font-inter">Combinamos diseño, tecnología y estrategia para crear sitios 
                    web que no solo se ven bien, <br /> si no que también generan 
                    resultados
                </p>
            </div>
            <div className="text-[#EEEEEE] flex justify-between gap-10 pb-5">
                <div className="border-1 rounded-xl p-4">
                    <Goal className="h-10 w-auto mb-5"/>
                    <div className="flex flex-col gap-2 max-w-xs">
                        <h2 className="font-host font-bold text-xl">Enfocados en resultados</h2>
                        <p className="font-inter text-sm">Creamos sitios pensados para atraer clientes y hacer crecer tu negocio</p>
                    </div>
                </div>
                <div className="border-1 rounded-xl p-4">
                    <CodeXml className="h-10 w-auto mb-5"/>
                    <div className="flex flex-col gap-2 max-w-xs">
                        <h2 className="font-host font-bold text-xl">Tecnología moderna</h2>
                        <p className="font-inter text-sm">Utilizamos las mejores herramientas para garantizar velocidad, seguridad y calidad</p>
                    </div> 
                </div>
                <div className="border-1 rounded-xl p-4">
                    <User className="h-10 w-auto mb-5"/>
                    <div className="flex flex-col gap-2 max-w-xs">
                        <h2 className="font-host font-bold text-xl">Comunicación clara</h2>
                        <p className="font-inter text-sm">Te acompañamos en todo el proceso, resolvemos tus dudas y te mantenemos informado</p>
                    </div>
                </div>
                <div className="border-1 rounded-xl p-4">
                    <PencilLine className="h-10 w-auto mb-5"/> 
                    <div className="flex flex-col gap-2 max-w-xs">
                        <h2 className="font-host font-bold text-xl">A tu medida</h2>
                        <p className="font-inter text-sm">Cada proyecto es único, por eso nos adaptamos a tus necesidades y objetivos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}export default UsPart1