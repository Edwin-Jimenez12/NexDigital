import { useState } from "react";
import { ChevronDown, CircleCheckBig, Clock5 } from "lucide-react";

function PlanCard({ icon: Icon, nombre, descripcion, precio, beneficios, entrega }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article className="flex w-full rounded-xl bg-[#EAE9E9] font-host shadow-[0_10px_25px_rgba(17,17,17,0.12)] md:max-w-[300px]">
            <div className="flex w-full flex-col p-5">
                <button
                    type="button"
                    onClick={() => setIsOpen((estadoActual) => !estadoActual)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-start justify-between gap-4 text-left md:pointer-events-none md:cursor-default"
                >
                    <div>
                        <div className="mb-1 inline-flex items-center justify-center rounded-xl bg-[#0465F1]/15 p-3">
                            <Icon className="h-10 w-10 text-[#0465F1]" />
                        </div>

                        <h2 className="text-2xl font-bold text-[#111111]">{nombre}</h2>

                        <p className="font-inter text-sm text-[#111111]">{descripcion}</p>

                        <div>
                            <div className="mt-4 flex items-end gap-1">
                            <span className="text-lg font-bold text-[#111111]">USD</span>
                            <span className="text-2xl font-bold text-[#0465F1]">{precio}</span>
                        </div>
                        <p className="font-inter text-sm text-[#111111]/90">Pago unico</p>
                        <p className="font-inter text-xs text-[#111111]/90">Abono de 50% y 50% al finalizar el proyecto.</p>
                        </div>
                    </div>

                    <ChevronDown
                        className={`mt-2 h-6 w-6 shrink-0 text-[#0465F1] transition-transform duration-300 md:hidden ${
                            isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                </button>

                <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-500 md:mt-4 md:flex-1 md:grid-rows-[1fr] md:opacity-100 ${
                        isOpen
                            ? "mt-4 grid-rows-[1fr] opacity-100"
                            : "mt-0 grid-rows-[0fr] opacity-0"
                    }`}
                >
                    <div className="overflow-hidden">
                        <div className="flex h-full flex-col gap-4">
                            <div className="mx-auto h-[1px] w-[80%] rounded-full bg-[#111111]/15" />

                            <div className="flex flex-col gap-3">
                                {beneficios.map((beneficio) => (
                                    <div key={beneficio} className="flex items-start gap-2">
                                        <CircleCheckBig className="mt-[2px] h-5 w-5 shrink-0 text-[#0465F1]" />
                                        <p className="font-inter text-xs text-[#111111]">{beneficio}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto flex items-start gap-2 rounded-lg bg-[#0465F1]/10 p-3">
                                <Clock5 className="mt-[2px] h-5 w-5 shrink-0 text-[#0465F1]" />
                                <p className="font-inter text-sm leading-relaxed text-[#111111]">
                                    <span className="font-semibold">Tiempo estimado de entrega:</span>{" "}
                                    <span className="text-xs">{entrega}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default PlanCard;
