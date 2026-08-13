import {
  BadgeCheck,
  CalendarClock,
  CreditCard,
  FileCheck2,
  Globe2,
  RefreshCcw,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Bottom from "../components/Bottom";
import Menu from "../components/Menu";

const sections = [
  { id: "identificacion", label: "Identificación" },
  { id: "servicios", label: "Servicios y contratación" },
  { id: "pagos", label: "Precios y pagos" },
  { id: "cliente", label: "Responsabilidades del cliente" },
  { id: "plazos", label: "Plazos y entrega" },
  { id: "cambios", label: "Cambios y alcance" },
  { id: "cancelacion", label: "Cancelaciones" },
  { id: "garantia", label: "Garantía" },
  { id: "propiedad", label: "Propiedad y autoría" },
  { id: "responsabilidad", label: "Responsabilidad" },
];

function TermSection({ id, number, title, icon: Icon, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-2xl border border-[#EAE9E9]/10 bg-[#0D1520]/90 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-8"
    >
      <div className="mb-5 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0465F1]/15">
          <Icon className="h-5 w-5 text-[#0465F1]" />
        </div>
        <div>
          <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-[#0465F1]">
            Sección {number}
          </p>
          <h2 className="font-host text-2xl font-bold text-[#EAE9E9] md:text-3xl">
            {title}
          </h2>
        </div>
      </div>
      <div className="space-y-4 font-inter text-sm leading-7 text-[#EAE9E9]/75 md:text-base">
        {children}
      </div>
    </section>
  );
}

function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#060D17] text-[#EAE9E9]">
      <Menu />

      <header className="relative overflow-hidden border-b border-[#EAE9E9]/10 px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#0465F1]/15 blur-[110px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0465F1]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-6xl">
          <img src="/logo.svg" alt="Nex Digital" className="mb-8 h-16 w-auto" />
          <p className="mb-3 font-inter text-sm font-semibold uppercase tracking-[0.22em] text-[#0465F1]">
            Información contractual
          </p>
          <h1 className="max-w-4xl font-host text-4xl font-bold leading-tight md:text-6xl">
            Términos y <span className="text-[#0465F1]">condiciones</span>
          </h1>
          <p className="mt-6 max-w-3xl font-inter text-base leading-7 text-[#EAE9E9]/70 md:text-lg">
            Estas condiciones explican de forma clara cómo Nex Digital presta sus
            servicios de diseño y desarrollo web, así como las responsabilidades,
            pagos, plazos y derechos aplicables a cada proyecto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 font-inter text-xs text-[#EAE9E9]/70">
            <span className="rounded-full border border-[#0465F1]/35 bg-[#0465F1]/10 px-4 py-2">
              Vigentes desde el 12 de agosto de 2026
            </span>
            <span className="rounded-full border border-[#EAE9E9]/10 bg-[#EAE9E9]/5 px-4 py-2">
              República de Panamá
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:px-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:py-16">
        <aside className="hidden lg:block">
          <nav className="sticky top-28 rounded-2xl border border-[#EAE9E9]/10 bg-[#0D1520]/80 p-5 shadow-xl backdrop-blur-md">
            <p className="mb-4 font-host text-lg font-semibold">Contenido</p>
            <div className="flex flex-col gap-1">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="rounded-lg px-3 py-2 font-inter text-sm text-[#EAE9E9]/65 transition-colors hover:bg-[#0465F1]/15 hover:text-[#EAE9E9]"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </aside>

        <div className="space-y-6">
          <div className="rounded-2xl border border-[#0465F1]/25 bg-[#0465F1]/10 p-5 font-inter text-sm leading-7 text-[#EAE9E9]/80 md:p-6 md:text-base">
            Al firmar el contrato de prestación de servicios, el cliente declara
            haber leído y aceptado estos términos y condiciones. La cotización y el
            contrato firmado especificarán el plan, precio y alcance particular de
            cada proyecto.
          </div>

          <TermSection id="identificacion" number="01" title="Identificación y aceptación" icon={FileCheck2}>
            <p>
              Nex Digital es un nombre comercial operado por Edwin Anel Jiménez
              García, persona natural ubicada en la República de Panamá. Estas
              condiciones regulan la contratación de sus servicios de diseño,
              desarrollo, publicación, optimización y mantenimiento web.
            </p>
            <p>
              La contratación se formaliza mediante un contrato firmado digitalmente
              por Nex Digital y el cliente. Si existiera alguna diferencia, prevalecerá
              el alcance específico establecido en la cotización y el contrato firmado.
            </p>
          </TermSection>

          <TermSection id="servicios" number="02" title="Servicios, planes y contratación" icon={BadgeCheck}>
            <p>
              Cada plan incluye únicamente las páginas, formularios, integraciones,
              rondas de cambios y demás elementos descritos en la página de planes y
              en la cotización aceptada. Los proyectos con necesidades diferentes se
              manejarán mediante una cotización personalizada.
            </p>
            <p>
              Antes de comenzar, Nex Digital indicará por escrito el alcance, precio,
              forma de pago y tiempo estimado. Ninguna solicitud que se encuentre
              fuera del alcance contratado se considerará incluida automáticamente.
            </p>
          </TermSection>

          <TermSection id="pagos" number="03" title="Precios, pagos y servicios externos" icon={CreditCard}>
            <p>
              Los precios se expresan en dólares estadounidenses. Para comenzar el
              proyecto, el cliente pagará un abono del 50% del precio total. El 50%
              restante deberá pagarse dentro de los cinco días calendario posteriores
              a la aprobación final y antes de transferir la propiedad y los accesos
              definitivos del proyecto.
            </p>
            <p>
              Mientras Nex Digital no tenga la obligación legal de cobrar ITBMS, este
              impuesto no será añadido al precio. Si las obligaciones fiscales cambian,
              cualquier impuesto aplicable será informado claramente en la cotización
              antes de la contratación.
            </p>
            <p>
              El dominio, hosting, correos empresariales, licencias y demás servicios
              externos no están incluidos, salvo indicación escrita. El cliente podrá
              comprarlos directamente o entregar a Nex Digital el monto necesario para
              gestionarlos en su nombre. Estos servicios pertenecerán al cliente, quien
              será responsable de sus renovaciones y condiciones.
            </p>
          </TermSection>

          <TermSection id="cliente" number="04" title="Responsabilidades del cliente" icon={ShieldCheck}>
            <p>
              El cliente debe entregar oportunamente los textos, imágenes, logotipos,
              datos de contacto, accesos, autorizaciones y cualquier otra información
              necesaria para desarrollar el proyecto. Tambien el cliente declara que es 
              propietario del contenido que proporciona o que cuenta con las autorizaciones 
              y licencias necesarias para utilizarlo en el proyecto.
            </p>
            <p>
              El cliente debe revisar los prototipos y entregas, responder las consultas
              y comunicar sus observaciones de manera clara. Nex Digital no será
              responsable de retrasos ocasionados por información incompleta, respuestas
              tardías o falta de acceso a servicios controlados por el cliente.
            </p>
          </TermSection>

          <TermSection id="plazos" number="05" title="Plazos, suspensión y entrega final" icon={CalendarClock}>
            <p>
              Los tiempos publicados son estimaciones que comienzan después de recibir
              el abono, la información necesaria y la aprobación del prototipo. El
              cronograma se pausará mientras falte contenido, acceso, aprobación o una
              respuesta indispensable del cliente.
            </p>
            <div className="rounded-xl border border-[#EAE9E9]/10 bg-black/15 p-4">
              <ul className="list-disc space-y-2 pl-5">
                <li>Después de 15 días calendario sin respuesta, el proyecto se considerará suspendido.</li>
                <li>Reactivarlo tendrá un costo del 15% del precio original.</li>
                <li>Después de 45 días calendario sin respuesta, el proyecto se considerará abandonado.</li>
                <li>Reiniciarlo tendrá un costo del 30% del precio original.</li>
              </ul>
            </div>
            <p>
              Toda reactivación dependerá de la disponibilidad de Nex Digital, requerirá
              la entrega de la información pendiente y tendrá un nuevo cronograma. En
              proyectos personalizados, el costo de reactivación podrá definirse en la
              cotización según su tamaño y complejidad.
            </p>
            <p>
              La entrega final se producirá cuando el sitio esté publicado o, si la
              publicación depende de una acción pendiente del cliente, cuando Nex Digital
              entregue los archivos y accesos finales correspondientes.
            </p>
          </TermSection>

          <TermSection id="cambios" number="06" title="Prototipo, rondas y cambios adicionales" icon={RefreshCcw}>
            <p>
              Antes del desarrollo se presentará un prototipo para revisión. La aprobación
              del cliente autoriza a Nex Digital a continuar tomando ese diseño como base.
              Cada plan incluye el número de rondas de cambios indicado en su descripción.
            </p>
            <p>
              Una ronda agrupa las observaciones enviadas conjuntamente por el cliente.
              Las solicitudes que excedan las rondas incluidas o modifiquen el alcance
              aprobado se cotizarán por separado. Nex Digital informará por escrito el
              precio adicional y el nuevo tiempo estimado, y solo comenzará después de
              recibir la aprobación del cliente.
            </p>
          </TermSection>

          <TermSection id="cancelacion" number="07" title="Cancelaciones y reembolsos" icon={Scale}>
            <p>
              Si el cliente cancela, la devolución se calculará según el trabajo realizado.
              No se cobrarán tarifas de reactivación cuando el proyecto sea cancelado.
            </p>
            <div className="overflow-hidden rounded-xl border border-[#EAE9E9]/10">
              <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-[#EAE9E9]/10 bg-[#0465F1]/10 px-4 py-3 font-host font-semibold text-[#EAE9E9]">
                <span>Estado del proyecto</span>
                <span>Devolución del abono</span>
              </div>
              {[
                ["Antes de comenzar", "100%"],
                ["Planificación iniciada, sin prototipo", "75%"],
                ["Primer prototipo entregado", "40%"],
                ["Prototipo en proceso de correcciones", "20%"],
                ["Prototipo aprobado o desarrollo iniciado", "0%"],
              ].map(([stage, refund]) => (
                <div
                  key={stage}
                  className="grid grid-cols-[1fr_auto] gap-4 border-b border-[#EAE9E9]/10 px-4 py-3 last:border-b-0"
                >
                  <span>{stage}</span>
                  <span className="font-semibold text-[#0465F1]">{refund}</span>
                </div>
              ))}
            </div>
            <p>
              Si el cliente hubiera pagado más del abono inicial, se devolverá únicamente
              la parte correspondiente al trabajo no realizado. Los dominios, hosting,
              licencias u otros servicios externos ya adquiridos no serán reembolsados
              por Nex Digital y estarán sujetos a las políticas de sus proveedores.
            </p>
          </TermSection>

          <TermSection id="garantia" number="08" title="Garantía y mantenimiento" icon={ShieldCheck}>
            <p>
              Nex Digital ofrece una garantía gratuita de 30 días calendario desde la
              entrega final. Si el cliente informa un error dentro de ese periodo, la
              corrección continuará cubierta aunque se complete posteriormente.
            </p>
            <p>
              La garantía cubre errores técnicos atribuibles a Nex Digital, como enlaces
              defectuosos, problemas de adaptación responsive, formularios configurados
              incorrectamente o contenido que no coincida con lo aprobado.
            </p>
            <p>
              No cubre nuevas funciones, cambios de preferencia, contenido nuevo,
              alteraciones realizadas por el cliente o terceros, falta de renovación ni
              fallos de hosting, dominios, APIs u otros servicios externos. Finalizada la
              garantía, cualquier soporte o mantenimiento se cotizará por separado.
            </p>
          </TermSection>

          <TermSection id="propiedad" number="09" title="Propiedad, crédito y portafolio" icon={Globe2}>
            <p>
              Después de recibir el pago completo, Nex Digital entregará al cliente los
              archivos y accesos acordados y transferirá los derechos de uso correspondientes
              al proyecto final. Las herramientas, librerías, recursos y servicios de terceros
              conservarán sus propias licencias y condiciones.
            </p>
            <p>
              Nex Digital podrá incluir una marca pequeña y visible con su logo y un enlace,
              indicando que el proyecto fue desarrollado por Nex Digital. El cliente podrá
              solicitar una marca más visible sin costo o eliminarla mediante acuerdo escrito
              y un pago adicional equivalente al 15% del precio total del plan o proyecto
              personalizado.
            </p>
            <p>
              Nex Digital podrá mostrar capturas o imágenes, publicar el enlace público y
              explicar de manera general el trabajo realizado en su portafolio, sitio web y
              redes sociales, sin divulgar información sensible del cliente o de su negocio.
              Esta exposición puede beneficiar la visibilidad de ambas partes, pero no promete
              ni garantiza visitas, clientes, ventas o resultados comerciales.
            </p>
            <p>
              El cliente está en completa libertad de solicitar por escrito y sin costo que
              su marca o proyecto no sea publicado por Nex Digital.
            </p>
          </TermSection>

          <TermSection id="responsabilidad" number="10" title="Responsabilidad, clientes internacionales y legislación" icon={Scale}>
            <p>
              Nex Digital se compromete a prestar el servicio conforme al alcance aprobado,
              pero no garantiza resultados comerciales, posicionamiento específico en
              buscadores, ventas, tráfico ni disponibilidad permanente de plataformas externas.
            </p>
            <p>
              La atención y documentación contractual se ofrecerán principalmente en español.
              Los clientes de otros países podrán ser atendidos mediante acuerdo, manteniendo
              el dólar estadounidense como moneda de referencia y la zona horaria de Panamá
              para comunicaciones y plazos.
            </p>
            <p>
              Estas condiciones se interpretarán conforme a las leyes de la República de 
              Panamá, sin excluir los derechos legales del consumidor.
            </p>
          </TermSection>

          <section className="rounded-2xl border border-[#0465F1]/25 bg-gradient-to-r from-[#0465F1]/15 to-[#0D1520] p-6 md:p-8">
            <h2 className="font-host text-2xl font-bold">Contacto y actualizaciones</h2>
            <p className="mt-3 font-inter text-sm leading-7 text-[#EAE9E9]/75 md:text-base">
              Para consultas relacionadas con estas condiciones, el cliente puede escribir a
              nexdigitaldev@gmail.com. Nex Digital podrá actualizar este documento cuando sea
              necesario; los proyectos ya contratados conservarán la versión aceptada en su
              contrato, salvo acuerdo escrito entre ambas partes.
            </p>
          </section>
        </div>
      </div>

      <Bottom />
    </main>
  );
}

export default TermsAndConditions;
