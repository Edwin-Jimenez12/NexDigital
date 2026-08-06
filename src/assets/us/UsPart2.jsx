import { MonitorCheck, PencilRuler, Rocket, Cog, LayoutTemplate  } from 'lucide-react'
function UsPart2() {
    return (
        <div className="bg-[#EAE9E9] px-10 flex flex-col gap-10 py-10">
            <div className="text-center text-[#EAE9E9] flex flex-col gap-1">
                <h1 className="font-host font-bold text-lg text-[#0465F1]">Servicios</h1>
                <h1 className="font-host font-bold text-2xl text-[#000000]/90">Soluciones web para impulsar tu presencia digital</h1>
            </div>
            {/* Cuadros */}
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-10 pb-5 items-stretch">
                {/* Cuadro 1 */}
                <div className="border-1 rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0465F1]/15">
                        <PencilRuler className="h-8 w-8 text-[#0465F1]" />
                    </div>
                    <div className="flex flex-col gap-2 max-w-xs">
                        <h2 className="font-host font-bold text-xl text-[#000000]">Prototipado UI/UX</h2>
                        <p className="font-inter text-sm text-[#000000]/70">Diseñamos prototipos interactivos para visualizar tu página web antes de comenzar el desarrollo.</p>
                    </div>
                </div>
                {/* Cuadro 2 */}
                <div className="border-1 rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0465F1]/15">
                        <MonitorCheck className="h-8 w-8 text-[#0465F1]" />
                    </div>
                    <div className="flex flex-col gap-2 max-w-xs">
                        <h2 className="font-host font-bold text-xl text-[#000000]">Páginas Web Corporativas</h2>
                        <p className="font-inter text-sm text-[#000000]/70">Sitios Profesionales para presentar tu negocio y generar confianza</p>
                    </div>
                </div>
                {/* Cuadro 3 */}
                <div className="border-1 rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0465F1]/15">
                        <LayoutTemplate className="h-8 w-8 text-[#0465F1]" />
                    </div>
                    <div className="flex flex-col gap-2 max-w-xs">
                        <h2 className="font-host font-bold text-xl text-[#000000]">Landing Pages</h2>
                        <p className="font-inter text-sm text-[#000000]/70">Páginas diseñadas para captar clientes y convertir visitas en resultados</p>
                    </div>
                </div>
                {/* Cuadro 4 */}
                <div className="border-1 rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0465F1]/15">
                        <Rocket className="h-8 w-8 text-[#0465F1]" />
                    </div>
                    <div className="flex flex-col gap-2 max-w-xs">
                        <h2 className="font-host font-bold text-xl text-[#000000]">Optimización Web</h2>
                        <p className="font-inter text-sm text-[#000000]/70">Mejoramos la velocidad de rendimiento de tu sitio para una mejor experiencia</p>
                    </div>
                </div>
                {/* Cuadro 5 */}
                <div className="border-1 rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0465F1]/15">
                        <Cog className="h-8 w-8 text-[#0465F1]" />
                    </div>
                    <div className="flex flex-col gap-2 max-w-xs">
                        <h2 className="font-host font-bold text-xl text-[#000000]">Mantenimiento web</h2>
                        <p className="font-inter text-sm text-[#000000]/70">Mantén tu sitio actualizado, seguro y funcionando siempre al 100%</p>
                    </div>
                </div>
            </div>
        </div>
    )
} export default UsPart2