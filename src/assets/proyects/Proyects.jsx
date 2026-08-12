import FillDGap from './Fill-d-gap'
function Proyects (){
    return(
        <div id='proyectos' className="flex flex-col gap-5 text-[#EAE9E9] 
        font-host py-10 bg-gradient-to-r from-[#060D17] via-[#03070C] to-[#000000] px-5
        scroll-mt-[90px]">
            <div className="flex flex-col">
                <div className="flex flex-col items-center">
                    <h1 className="font-host font-bold text-lg text-[#0465F1]">Nuestras colaboraciones</h1>
                    <h1 className="font-bold text-2xl text-center">Diseñamos experiencias digitales que marcan la difetencia</h1>
                    <p className="text-[#EAE9E9]/75 max-w-xl text-center text-sm">Cada proyecto refleja nuestro 
                    compromiso con la calidad, el diseño moderno y soluciones que impulsan negocios reales.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-10 px-10 justify-center'>
                <FillDGap/>
            </div>
        </div>
    )
}export default Proyects