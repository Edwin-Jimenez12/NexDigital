import { ChartNoAxesCombined } from "lucide-react";
import PlanCard from "./PlanCard";

function Growth() {
    const beneficios = [
        "Todo lo del plan Start.",
        "1 sitio web de hasta 7 páginas.",
        "Efectos visuales.",
        "Sección de preguntas frecuentes.",
        "Hasta 2 formularios de contacto.",
        "Optimización de velocidad.",
        "Hasta 3 rondas de cambios después de entrega.",
    ];

    return (
        <PlanCard
            icon={ChartNoAxesCombined}
            nombre="Plan Growth"
            descripcion="Ideal para negocios en crecimiento"
            precio="$199"
            beneficios={beneficios}
            entrega="10 a 15 días después de la aprobación del prototipo."
        />
    );
}

export default Growth;
