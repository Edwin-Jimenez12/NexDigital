import { ArrowRight } from "lucide-react";

function Start() {
    return (
        <div className="flex min-h-dvh flex-col justify-between pl-5 pt-[72px] md:pt-0">
            {/* Contenido principal */}
            <div className="flex flex-1 items-center  z-10">
                <div className="flex flex-col gap-3 md:gap-5">
                    <div>
                        <h3 className="text-sm text-[#0465F1] md:text-base">
                            DESARROLLO WEB PROFESIONAL
                        </h3>

                        <h1 className="font-host text-4xl font-bold text-[#EAE9E9] md:text-6xl">
                            Páginas web que <br />
                            <span className="text-[#0465F1]">impulsan</span> tu negocio
                        </h1>
                    </div>

                    <p className="font-inter text-md text-[#D1D5DB] md:text-lg">
                        Diseñamos y desarrollamos sitios web modernos,
                        <br />
                        rápidos y adaptados a todos los dispositivos para
                        <br />
                        que tu negocio crezca en internet.
                    </p>

                    <div className="flex flex-col items-start gap-3 font-host md:flex-row md:gap-5">
                        <a href="/planes">
                            <button className="flex cursor-pointer items-center gap-1 rounded-lg bg-[#0465F1] px-4 py-4 text-[#EEEEEE]">
                                Ver planes y precios
                                <ArrowRight className="h-5 w-auto" />
                            </button>
                        </a>

                        <a href="/#proyectos">
                            <button className="rounded-lg border-2 border-[#EAE9E9] px-4 py-4 text-[#EEEEEE] cursor-pointer">
                                Ver proyectos
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Start;
