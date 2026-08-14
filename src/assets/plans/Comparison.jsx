import {
    ChevronDown,
    CircleCheck,
    CircleHelp,
    Clock3,
    Gauge,
    Images,
    Mail,
    MapPin,
    MessageCircle,
    Monitor,
    RefreshCcw,
    Share2,
    Sparkles,
} from "lucide-react";

function Comparison() {
    const caracteristicas = [
        {nombre: "Sitio web", icono: Monitor, launch: "Hasta 2 páginas", start: "Hasta 4 páginas", growth: "Hasta 7 páginas", business: "Hasta 10 páginas",},
        {nombre: "WhatsApp", icono: MessageCircle, launch: true, start: true, growth: true, business: true,},
        {nombre: "Formulario de contacto", icono: Mail, launch: "1", start: "1", growth: "Hasta 2", business: "Hasta 4",},
        {nombre: "Redes sociales", icono: Share2, launch: true, start: true, growth: true, business: true,},
        {nombre: "Mapa de ubicación", icono: MapPin, launch: false, start: true, growth: true, business: true,},
        {nombre: "Galería de imágenes", icono: Images, launch: false, start: true, growth: true, business: true,},
        {nombre: "Efectos visuales", icono: Sparkles, launch: false, start: false, growth: true, business: true,},
        {nombre: "Preguntas frecuentes", icono: CircleHelp, launch: false, start: false, growth: true, business: true,},
        {nombre: "Optimización de velocidad", icono: Gauge, launch: false, start: false, growth: true, business: true,},
        {nombre: "Rondas de cambios", icono: RefreshCcw, launch: "1", start: "2", growth: "3", business: "4",},
        {nombre: "Tiempo de entrega", icono: Clock3, launch: "5 a 7 días", start: "7 a 10 días", growth: "10 a 15 días", business: "2 a 3 semanas",},
    ];

    const planes = [
        { nombre: "Launch", clave: "launch", precio: "$99" },
        { nombre: "Start", clave: "start", precio: "$149" },
        { nombre: "Growth", clave: "growth", precio: "$199" },
        { nombre: "Business", clave: "business", precio: "$299" },
    ];

    const mostrarValor = (valor) => {
        if (valor === true) {
            return <CircleCheck className="mx-auto h-5 w-5 text-[#0465F1]" />;
        }

        if (valor === false) {
            return <span className="text-[#111111]/40">—</span>;
        }

        return valor;
    };

    const mostrarValorMovil = (valor) => {
        if (valor === true) {
            return (
                <span className="flex items-center gap-1 text-[#0465F1]">
                    <CircleCheck className="h-4 w-4" />
                    Incluido
                </span>
            );
        }

        if (valor === false) {
            return <span className="text-[#111111]/40">No incluido</span>;
        }

        return <span>{valor}</span>;
    };

    return (
        <section className="px-5 pb-10 font-host md:px-10">
            <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold text-[#111111]">
                    Comparativa de <span className="text-[#0465F1]">planes</span>
                </h2>

                <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-[#0465F1]" />
            </div>

            {/* Comparación móvil y tablet */}
            <div className="flex flex-col gap-3 lg:hidden">
                {planes.map(({ nombre, clave, precio }) => (
                    <details
                        key={nombre}
                        className="group rounded-xl border border-[#111111]/15 bg-[#EAE9E9] shadow-[0_10px_25px_rgba(17,17,17,0.12)]"
                    >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 [&::-webkit-details-marker]:hidden">
                            <div>
                                <h3 className="text-xl font-bold text-[#111111]">Plan {nombre}</h3>
                                <p className="mt-1 text-sm font-bold text-[#111111]">
                                    USD <span className="text-xl text-[#0465F1]">{precio}</span>
                                </p>
                            </div>

                            <ChevronDown className="h-6 w-6 shrink-0 text-[#0465F1] transition-transform duration-300 group-open:rotate-180" />
                        </summary>

                        <div className="border-t border-[#111111]/10 px-4 py-2 font-inter text-xs text-[#111111]">
                            {caracteristicas.map((caracteristica) => {
                                const Icono = caracteristica.icono;

                                return (
                                    <div
                                        key={caracteristica.nombre}
                                        className="flex items-center justify-between gap-4 border-b border-[#111111]/10 py-3 last:border-b-0"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Icono className="h-4 w-4 shrink-0 text-[#0465F1]" />
                                            <span>{caracteristica.nombre}</span>
                                        </div>

                                        <div className="shrink-0 text-right font-medium">
                                            {mostrarValorMovil(caracteristica[clave])}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </details>
                ))}
            </div>

            {/* Tabla de escritorio */}
            <div className="hidden overflow-x-auto rounded-xl border border-[#111111]/15 bg-[#EAE9E9] shadow-[0_10px_25px_rgba(17,17,17,0.12)] lg:block">
                <table className="w-full min-w-[850px] border-collapse text-center">
                    <thead className="bg-[#060D17] text-[#EAE9E9]">
                        <tr>
                            <th className="rounded-tl-xl px-4 py-3 text-left">Características</th>
                            <th className="px-4 py-3">Launch</th>
                            <th className="px-4 py-3">Start</th>
                            <th className="relative px-4 py-3">
                                Growth
                            </th>
                            <th className="rounded-tr-xl px-4 py-3">Business</th>
                        </tr>
                    </thead>
                    <tbody className="font-inter text-xs text-[#111111]">
                        {caracteristicas.map(({ nombre, icono: Icono, launch, start, growth, business }) => (
                            <tr key={nombre} className="border-b border-[#111111]/10 last:border-b-0">
                                <th className="px-4 py-3 text-left font-medium">
                                    <div className="flex items-center gap-2">
                                        <Icono className="h-4 w-4 shrink-0 text-[#0465F1]" />
                                        <span>{nombre}</span>
                                    </div>
                                </th>
                                <td className="border-l border-[#111111]/10 px-4 py-3">{mostrarValor(launch)}</td>
                                <td className="border-l border-[#111111]/10 px-4 py-3">{mostrarValor(start)}</td>
                                <td className="border-l border-[#111111]/10 bg-[#0465F1]/5 px-4 py-3">{mostrarValor(growth)}</td>
                                <td className="border-l border-[#111111]/10 px-4 py-3">{mostrarValor(business)}</td>
                            </tr>
                        ))}

                        <tr className="border-t border-[#111111]/15 font-host font-bold">
                            <th className="px-4 py-4 text-left text-base">Precio</th>
                            <td className="border-l border-[#111111]/10 px-4 py-4">USD <span className="text-xl text-[#0465F1]">$99</span></td>
                            <td className="border-l border-[#111111]/10 px-4 py-4">USD <span className="text-xl text-[#0465F1]">$149</span></td>
                            <td className="border-l border-[#111111]/10 bg-[#0465F1]/5 px-4 py-4">USD <span className="text-xl text-[#0465F1]">$199</span></td>
                            <td className="border-l border-[#111111]/10 px-4 py-4">USD <span className="text-xl text-[#0465F1]">$299</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Comparison;
