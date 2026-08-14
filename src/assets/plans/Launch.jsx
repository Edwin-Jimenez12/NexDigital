import { Send } from "lucide-react";
import PlanCard from "./PlanCard";

function Launch() {
    const beneficios = [
        "1 sitio web de hasta 2 páginas.",
        "Adaptado para celulares, tablets y computadoras.",
        "Enlace a WhatsApp.",
        "Formulario de contacto.",
        "Enlaces a redes sociales.",
        "Publicación del sitio web.",
        "1 ronda de cambios después de entrega.",
    ];

    return (
        <PlanCard
            icon={Send}
            nombre="Plan Launch"
            descripcion="Ideal para emprendedores"
            precio="$99"
            beneficios={beneficios}
            entrega="5 a 7 días hábiles después de la aprobación del prototipo."
        />
    );
}

export default Launch;
