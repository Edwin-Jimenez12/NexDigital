import { CircleCheckBig, Puzzle } from "lucide-react";

function Personalized() {
    const funcionalidades = [
        "Paneles administrativos",
        "Sistemas internos",
        "Gestión de usuarios",
        "Funcionalidades desarrolladas a medida",
        "Integraciones con servicios externos",
    ];

    return (
        <section className="mx-10 mb-10 rounded-xl border border-[#111111]/10 p-6 font-host shadow-[0_10px_25px_rgba(17,17,17,0.12)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
                {/* Información del proyecto */}
                <div className="flex flex-1 items-start gap-4">
                    <div className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#0465F1]/15 p-3">
                        <Puzzle className="h-10 w-10 text-[#0465F1]" />
                    </div>

                    <div>
                        <h2 className="font-host text-2xl font-bold text-[#111111]">
                            Proyecto Personalizado
                        </h2>

                        <p className="mt-2 max-w-xl font-inter text-sm leading-relaxed text-[#111111]/80">
                            Para proyectos que requieran funcionalidades específicas o un desarrollo fuera del alcance de los planes anteriores.
                        </p>
                    </div>
                </div>

                {/* Línea divisoria */}
                <div className="hidden w-[1px] bg-[#111111]/15 lg:block" />

                {/* Funcionalidades y precio */}
                <div className="flex flex-1 flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div className="flex flex-col gap-2">
                        {funcionalidades.map((funcionalidad) => (
                            <div key={funcionalidad} className="flex items-start gap-2">
                                <CircleCheckBig className="mt-[1px] h-4 w-4 shrink-0 text-[#0465F1]" />

                                <p className="font-inter text-xs text-[#111111]">
                                    {funcionalidad}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="shrink-0">


                        <div className="rounded-md bg-[#111111] px-5 py-3 font-inter text-xs font-semibold text-[#EAE9E9]">
                            Cotización personalizada
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Personalized;
