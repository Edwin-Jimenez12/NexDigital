export const WHATSAPP_NUMBER = "50765591976";

const numeroLocal = WHATSAPP_NUMBER.slice(3);

export const WHATSAPP_DISPLAY = `+507 ${numeroLocal.slice(0, 4)}-${numeroLocal.slice(4)}`;

export const WHATSAPP_MESSAGES = {
    general: "Hola, quisiera recibir información sobre los planes y servicios.",
    advisor: "Hola, necesito ayuda para elegir el plan adecuado para mi negocio.",
    custom: "Hola, quisiera solicitar una cotización para un proyecto personalizado.",
};

export function createWhatsAppLink(mensaje = WHATSAPP_MESSAGES.general) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}
