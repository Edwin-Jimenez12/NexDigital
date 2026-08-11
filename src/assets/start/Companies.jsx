function Companies() {
    return (
        <div className="flex flex-col items-center px-5 bg-[#EAE9E9]/95 z-30 py-4 font-bold text-[#EAE9E9] md:flex md:py-7 md:text-xl lg:text-2xl gap-5">
            <h1 className="text-center text-[#111111] mb-3 opacity-90 text-2xl">
                Empresas que <br />
                confían en nosotros
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-between gap-25 pr-5">
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