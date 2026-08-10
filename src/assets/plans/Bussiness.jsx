import { Gem, CircleCheckBig, Clock5 } from "lucide-react";

function Bussiness() {
    const beneficios = [
        "Todo lo del plan Growth.",
        "1 sitio web con hasta 10 páginas.",
        "Hasta 4 formularios.",
        "Mejor rendimiento y velocidad de carga.",
        "Hasta 4 rondas de cambios después de la entrega.",
    ];

    return (
        <div className="flex w-full max-w-[300px] rounded-xl font-host shadow-[0_10px_25px_rgba(17,17,17,0.12)]">
            <div className="flex w-full flex-1 flex-col gap-4 p-5">
                {/* Título */}
                <div>
                    <div className="mb-1 inline-flex items-center justify-center rounded-xl bg-[#0465F1]/15 p-3">
                        <Gem className="h-10 w-10 text-[#0465F1]" />
                    </div>
                    <h1 className="font-host text-2xl font-bold text-[#111111]">
                        Plan Business
                    </h1>
                    <p className="font-inter text-sm text-[#111111]">
                        Ideal para empresas consolidadas
                    </p>
                </div>
                {/* Precio */}
                <div className="flex items-end gap-1">
                    <h2 className="font-host text-lg font-bold text-[#111111]">
                        USD
                    </h2>
                    <h1 className="font-host text-2xl font-bold text-[#0465F1]">
                        $299
                    </h1>
                </div>
                {/* Línea */}
                <div className="mx-auto h-[1px] w-[80%] rounded-full bg-[#111111]/15" />
                {/* Beneficios */}
                <div className="flex flex-col gap-3">
                    {beneficios.map((beneficio) => (
                        <div
                            key={beneficio}
                            className="flex items-start justify-start gap-2"
                        >
                            <CircleCheckBig className="mt-[2px] h-5 w-5 shrink-0 text-[#0465F1]" />
                            <p className="font-inter text-xs text-[#111111]">
                                {beneficio}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Tiempo de entrega */}
                <div className="mt-auto flex items-start gap-2 rounded-lg bg-[#0465F1]/10 p-3">
                    <Clock5 className="mt-[2px] h-5 w-5 shrink-0 text-[#0465F1]" />

                    <p className="font-inter text-sm leading-relaxed text-[#111111]">
                        <span className="font-semibold">Tiempo estimado de entrega:</span>{" "}
                        <span className="text-xs">2 a 3 semanas después de la aprobación del prototipo.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Bussiness;
