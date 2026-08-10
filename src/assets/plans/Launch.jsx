import { Send, CircleCheckBig, Clock5 } from "lucide-react";

function Launch() {
    const beneficios = [
        "1 sitio web con 1 página.",
        "Adaptado para celulares, tablets y computadoras.",
        "Enlace a WhatsApp.",
        "Formulario de contacto.",
        "Enlaces a redes sociales.",
        "Publicación del sitio web.",
        "1 ronda de cambios después de la entrega.",
    ];

    return (
        <div className="flex w-full max-w-[300px] rounded-xl font-host shadow-[0_10px_25px_rgba(17,17,17,0.12)]">
            <div className="flex w-full flex-1 flex-col gap-4 p-5">
                {/* Título */}
                <div>
                    <div className="mb-1 inline-flex items-center justify-center rounded-xl bg-[#0465F1]/15 p-3">
                        <Send className="h-10 w-10 text-[#0465F1]" />
                    </div>

                    <h1 className="font-host text-2xl font-bold text-[#111111]">
                        Plan Launch
                    </h1>

                    <p className="font-inter text-sm text-[#111111]">
                        Ideal para emprendedores
                    </p>
                </div>

                {/* Precio */}
                <div className="flex items-end gap-1">
                    <h2 className="font-host text-lg font-bold text-[#111111]">
                        USD
                    </h2>

                    <h1 className="font-host text-2xl font-bold text-[#0465F1]">
                        $99
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
                        <span className="text-xs">5 a 7 días hábiles después de la aprobación del prototipo.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Launch;
