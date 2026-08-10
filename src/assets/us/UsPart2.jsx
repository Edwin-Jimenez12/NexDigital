import { MonitorCheck, PencilRuler, Rocket, Cog, LayoutTemplate  } from 'lucide-react'
function UsPart2() {
    return (
        <div id='servicios' className="bg-[#EAE9E9] px-10 flex flex-col gap-10 py-10 scroll-mt-[25px]">
            <div className="text-center text-[#EAE9E9] flex flex-col gap-1">
                <h1 className="font-host font-bold text-lg text-[#0465F1]">Servicios</h1>
                <h1 className="font-host font-bold text-2xl text-[#000000]/90">Soluciones web para impulsar tu presencia digital</h1>
            </div>
            {/* Cuadros */}
            <div className="flex flex-col lg:flex-row md:justify-between items-center gap-10 pb-5 items-stretch">
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
            <div className='flex flex-col md:flex-row justify-between py-5 bg-[#060D17] rounded-xl text-[#EAE9E9] items-center text-inter'>
                <div className='flex flex-col md:flex-row md:gap-10 items-center'>
                    <img src="/images/rocket.svg" alt="Rocket" className='h-30 w-auto flex rounded-lg md:pl-5'/>
                <div className='md:max-w-xl p-5'>
                    <h1 className='md:text-2xl text-lg font-host font-bold '>¿Listo para llevar tu negocio al siguiente nivel?</h1>
                    <p className='md:text-lg text-md text-[#EAE9E9]/90'>Elige el plan ideal para ti y comencemos a construir tu página we profesional hoy mismo.</p>
                </div>
                </div>
                <div className='md:pr-10 hover:scale-105 transition duration-300 '>
                    <a href="/planes">
                        <button className="text-inter bg-[#0465F1] cursor-pointer text-[#EAE9E9] hover:text-[#FFFFFF] transition duration-300  py-2 px-6 rounded-md items-center  text-lg">
                            Ver planes y precios
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
} export default UsPart2