import { CalendarPlus2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

function PlanAdvisor() {
    return (
        <section className="px-10 pb-10">
            <div className="flex flex-col gap-6 rounded-xl bg-[#060D17] px-6 py-5 shadow-[0_10px_25px_rgba(17,17,17,0.12)] md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                    <div className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#0465F1]/15 p-3">
                        <CalendarPlus2 className="h-9 w-9 text-[#0465F1]" />
                    </div>

                    <div>
                        <h2 className="font-host text-xl font-bold text-[#EAE9E9]">
                            ¿No estás seguro de qué plan elegir?
                        </h2>

                        <p className="mt-1 max-w-lg font-inter text-xs leading-relaxed text-[#EAE9E9]/70">
                            Cuéntanos sobre tu proyecto y te ayudamos a encontrar la mejor opción para tu negocio.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className="flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md bg-[#0465F1] px-8 py-3 font-host text-sm font-semibold text-[#EAE9E9] transition-colors duration-300 hover:bg-[#0354c9]"
                >
                    <span>Hablar con un asesor</span>
                    <FaWhatsapp className="h-4 w-4" />
                </button>
            </div>
        </section>
    );
}

export default PlanAdvisor;
