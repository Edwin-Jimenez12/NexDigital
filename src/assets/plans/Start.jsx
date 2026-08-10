import { Rocket } from "lucide-react";
import PlanCard from "./PlanCard";

function Start() {
    const beneficios = [
        "Todo lo del plan Launch.",
        "1 sitio web con hasta 4 páginas.",
        "Mapa de ubicación.",
        "Galería de imágenes.",
        "Hasta 2 rondas de cambios después de la entrega.",
    ];

    return (
        <PlanCard
            icon={Rocket}
            nombre="Plan Start"
            descripcion="Ideal para pequeños negocios"
            precio="$149"
            beneficios={beneficios}
            entrega="7 a 10 días hábiles después de la aprobación del prototipo."
        />
    );
}

export default Start;
