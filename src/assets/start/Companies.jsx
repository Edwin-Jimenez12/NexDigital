function Companies() {
    return (
        <div className="flex flex-col items-center px-5 bg-[#EAE9E9]/95 z-30 py-4 
        text-[#EAE9E9] md:flex md:py-7 md:text-xl lg:text-2xl gap-10 font-host">
            <div>
                <h1 className="text-center text-[#111111] mb-1 opacity-90 text-2xl font-bold">
                Empresas que
                confían en nosotros
            </h1>
            <p className="text-[#111111]/75 max-w-xl text-center text-sm text-inter">Trabajamos junto a marcas 
            que apuestan por el diseño, la estrategia y la innovación para crecer en digital.
            </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 pr-5">
                <img
                    src="/images/FillDGap/fillDGapLogo.svg"
                    alt="FILL D GAP"
                    className="h-20 w-auto opacity-90 transition-all duration-300 hover:scale-105"
                />
                <img
                    src="/images/DavisMarketing/DmLogo.svg"
                    alt="Panamá Viajero"
                    className="h-20 w-auto opacity-80 transition-all duration-300 hover:scale-105"
                />
            </div>
        </div>
    )
}export default Companies