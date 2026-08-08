import PanamaViajero from './Panama-Viajero'
function Proyects (){
    return(
        <div className="text-[#EAE9E9] font-host py-10 bg-gradient-to-r from-[#060D17] via-[#03070C] to-[#000000]">
            <div className="flex flex-col">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-2xl">Diseñamos experiencias digitales que marcan la difetencia</h1>
                    <p className="text-[#EAE9E9]/75">Cada proyecto refleja nuestro compromiso con la calidad, el diseño moderno y soluciones que impulsan negocios reales.</p>
                </div>
            </div>
            <div className='px-10'>
                <PanamaViajero/>
            </div>
        </div>
    )
}export default Proyects