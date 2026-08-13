import { Gem } from "lucide-react";
import PlanCard from "./PlanCard";

function Bussiness() {
    const beneficios = [
        "Todo lo del plan Growth.",
        "1 sitio web de hasta 10 páginas.",
        "Hasta 4 formularios.",
        "Mejor rendimiento y velocidad de carga.",
        "Hasta 4 rondas de cambios después de entrega.",
    ];

    return (
        <PlanCard
            icon={Gem}
            nombre="Plan Business"
            descripcion="Ideal para empresas consolidadas"
            precio="$299"
            beneficios={beneficios}
            entrega="2 a 3 semanas después de la aprobación del prototipo."
        />
    );
}

export default Bussiness;
