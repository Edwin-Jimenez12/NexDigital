import {
  Archive,
  Cookie,
  Database,
  Eye,
  FileLock2,
  Globe2,
  KeyRound,
  MailCheck,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import Bottom from "../components/Bottom";
import Menu from "../components/Menu";

const sections = [
  { id: "responsable", label: "Responsable" },
  { id: "alcance", label: "Alcance de la política" },
  { id: "datos", label: "Datos tratados" },
  { id: "obtencion", label: "Obtención de datos" },
  { id: "finalidades", label: "Finalidades" },
  { id: "servicios", label: "Servicios externos" },
  { id: "conservacion", label: "Conservación" },
  { id: "destinatarios", label: "Destinatarios" },
  { id: "derechos", label: "Derechos" },
  { id: "seguridad", label: "Seguridad y cambios" },
];

function PrivacySection({ id, number, title, icon: Icon, children }) {
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

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#060D17] text-[#EAE9E9]">
      <Menu />

      <header className="relative overflow-hidden border-b border-[#EAE9E9]/10 px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#0465F1]/15 blur-[110px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0465F1]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-6xl">
          <img src="/logo.svg" alt="Nex Digital" className="mb-8 h-16 w-auto" />
          <p className="mb-3 font-inter text-sm font-semibold uppercase tracking-[0.22em] text-[#0465F1]">
            Protección de datos
          </p>
          <h1 className="max-w-4xl font-host text-4xl font-bold leading-tight md:text-6xl">
            Política de <span className="text-[#0465F1]">privacidad</span>
          </h1>
          <p className="mt-6 max-w-3xl font-inter text-base leading-7 text-[#EAE9E9]/70 md:text-lg">
            Esta política explica qué datos personales puede recibir Nex Digital,
            para qué los utiliza, durante cuánto tiempo los conserva y cómo pueden
            las personas ejercer sus derechos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 font-inter text-xs text-[#EAE9E9]/70">
            <span className="rounded-full border border-[#0465F1]/35 bg-[#0465F1]/10 px-4 py-2">
              Vigente desde el 12 de agosto de 2026
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
            Actualmente, el sitio web de Nex Digital no contiene formularios de
            contacto, no crea cuentas de usuario y no utiliza herramientas propias
            de analítica, publicidad o seguimiento. Los datos se reciben cuando una
            persona decide comunicarse o contratar un servicio.
          </div>

          <PrivacySection id="responsable" number="01" title="Responsable del tratamiento" icon={UserRoundCheck}>
            <p>
              Nex Digital es un nombre comercial operado por Edwin Anel Jiménez
              García, persona natural ubicada en la República de Panamá, y es
              responsable de decidir cómo se utilizan los datos personales recibidos
              durante las consultas y la prestación de sus servicios.
            </p>
            <p>
              Las consultas sobre privacidad y las solicitudes relacionadas con datos
              personales pueden enviarse a
              <a
                href="mailto:nexdigitaldev@gmail.com?subject=Solicitud%20sobre%20datos%20personales"
                className="ml-1 font-semibold text-[#0465F1] hover:underline"
              >
                nexdigitaldev@gmail.com
              </a>.
            </p>
          </PrivacySection>

          <PrivacySection id="alcance" number="02" title="Alcance de esta política" icon={Eye}>
            <p>
              Esta política se aplica a la información que Nex Digital recibe mediante
              sus canales de contacto, cotizaciones, contratos, reuniones, pagos y
              desarrollo de proyectos. También contempla los datos técnicos mínimos que
              puedan generarse al visitar el sitio.
            </p>
            <p>
              Esta no es una política independiente para WhatsApp, correo electrónico u
              otra plataforma. Es la política general de Nex Digital sobre el uso que
              realiza de la información que recibe por esos medios.
            </p>
          </PrivacySection>

          <PrivacySection id="datos" number="03" title="Datos personales que pueden tratarse" icon={Database}>
            <p>Dependiendo de la relación con la persona, Nex Digital puede recibir:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Nombre, número telefónico, correo electrónico, país y datos de contacto.</li>
              <li>Mensajes, solicitudes, archivos adjuntos y datos incluidos voluntariamente en las comunicaciones.</li>
              <li>Información del negocio necesaria para preparar una cotización o desarrollar un proyecto.</li>
              <li>Datos incluidos en contratos, aprobaciones y firmas digitales.</li>
              <li>Comprobantes y referencias relacionadas con pagos, sin almacenar credenciales bancarias.</li>
              <li>Logotipos, textos, imágenes, accesos y demás materiales suministrados para el proyecto.</li>
              <li>Dirección IP, navegador, dispositivo, fecha y registros técnicos que el proveedor de alojamiento pueda procesar para entregar y proteger el sitio.</li>
            </ul>
            <p>
              Nex Digital no solicita datos sensibles que no sean necesarios para la
              relación comercial. Las personas deben evitar enviarlos, salvo que exista
              una necesidad concreta y se haya acordado previamente su tratamiento.
            </p>
          </PrivacySection>

          <PrivacySection id="obtencion" number="04" title="Cómo se obtienen los datos" icon={MailCheck}>
            <p>La información puede recibirse cuando una persona:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Inicia voluntariamente una conversación por WhatsApp o correo electrónico.</li>
              <li>Solicita información, asesoría o una cotización.</li>
              <li>Participa en una reunión o entrega información para un proyecto.</li>
              <li>Firma un contrato o aprueba una etapa del trabajo.</li>
              <li>Realiza un pago o envía su comprobante.</li>
            </ul>
            <p>
              Cuando otra persona entrega datos de terceros, declara que cuenta con
              autorización para compartirlos y que dicha entrega es necesaria para el
              proyecto.
            </p>
          </PrivacySection>

          <PrivacySection id="finalidades" number="05" title="Finalidades y autorización" icon={FileLock2}>
            <p>Los datos podrán utilizarse únicamente para:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Responder consultas y recomendar servicios.</li>
              <li>Preparar cotizaciones y formalizar contratos.</li>
              <li>Diseñar, desarrollar, publicar y entregar los proyectos contratados.</li>
              <li>Gestionar pagos, aprobaciones, soporte, garantía y mantenimiento.</li>
              <li>Mantener registros administrativos y cumplir obligaciones legales.</li>
              <li>Atender solicitudes, reclamaciones y proteger derechos contractuales.</li>
              <li>Prevenir usos indebidos y mantener la seguridad del sitio y las comunicaciones.</li>
            </ul>
            <p>
              El tratamiento se realizará con el consentimiento de la persona, cuando
              sea necesario para preparar o ejecutar un contrato, para cumplir una
              obligación legal o para atender una reclamación. Nex Digital no enviará
              publicidad periódica ni agregará contactos a campañas comerciales sin
              autorización previa.
            </p>
          </PrivacySection>

          <PrivacySection id="servicios" number="06" title="Sitio web y servicios externos" icon={Globe2}>
            <div className="rounded-xl border border-[#EAE9E9]/10 bg-black/15 p-4">
              <div className="mb-3 flex items-center gap-2 font-host font-semibold text-[#EAE9E9]">
                <Cookie className="h-5 w-5 text-[#0465F1]" />
                Cookies y seguimiento
              </div>
              <p>
                Nex Digital no ha implementado cookies publicitarias, perfiles de usuario,
                píxeles de seguimiento ni herramientas propias de analítica en este sitio.
                Si estas tecnologías se incorporan posteriormente, esta política deberá
                actualizarse antes de utilizarlas.
              </p>
            </div>
            <p>
              El sitio contiene enlaces hacia servicios externos como WhatsApp, correo
              electrónico, Instagram y Google Maps. Al abrir uno de esos enlaces, la
              persona comienza a utilizar una plataforma administrada por un tercero.
              Nex Digital no controla el funcionamiento ni las prácticas internas de
              esas plataformas.
            </p>
            <p>
              También pueden intervenir proveedores necesarios para el alojamiento web,
              pagos, dominio, hosting, correo o firma digital. Algunos pueden procesar
              información fuera de Panamá. Nex Digital procurará utilizar únicamente los
              servicios necesarios y limitar la información compartida a la requerida para
              cumplir su función.
            </p>
          </PrivacySection>

          <PrivacySection id="conservacion" number="07" title="Conservación y eliminación" icon={Archive}>
            <ul className="list-disc space-y-2 pl-5">
              <li>Las consultas que no produzcan una contratación podrán conservarse hasta 12 meses desde la última comunicación.</li>
              <li>Los datos y materiales de un proyecto se conservarán durante su ejecución, garantía y hasta 12 meses después de la entrega final como respaldo operativo.</li>
              <li>Los contratos, aprobaciones y registros de pago se conservarán durante el tiempo necesario para cumplir obligaciones legales y atender posibles reclamaciones.</li>
              <li>El contenido autorizado para el portafolio podrá mantenerse publicado mientras el cliente no solicite su retiro.</li>
            </ul>
            <p>
              Al finalizar el periodo correspondiente, la información se eliminará o se
              conservará únicamente cuando exista una obligación legal, contractual o una
              reclamación pendiente. La eliminación de datos no obliga a borrar copias que
              deban conservarse legalmente ni registros técnicos controlados por terceros.
            </p>
          </PrivacySection>

          <PrivacySection id="destinatarios" number="08" title="Compartición y confidencialidad" icon={ShieldCheck}>
            <p>
              Nex Digital no vende, alquila ni intercambia datos personales. La información
              podrá compartirse únicamente cuando sea necesario con un proveedor que participe
              en la prestación del servicio, cuando la persona lo autorice, cuando lo exija una
              autoridad competente o cuando sea necesario para proteger derechos legales.
            </p>
            <p>
              Los proveedores recibirán solamente la información necesaria para su función.
              Nex Digital no publicará conversaciones, documentos privados, accesos ni
              información sensible del cliente. La publicación de imágenes o información
              general de un proyecto se regirá por lo acordado con el cliente.
            </p>
          </PrivacySection>

          <PrivacySection id="derechos" number="09" title="Derechos de las personas" icon={KeyRound}>
            <p>
              De acuerdo con la Ley 81 de 2019 de la República de Panamá, la persona titular
              puede solicitar acceso, rectificación, cancelación, oposición y portabilidad de
              sus datos personales, así como retirar su consentimiento cuando corresponda.
            </p>
            <p>
              La solicitud debe enviarse a nexdigitaldev@gmail.com e indicar el nombre de la
              persona, el derecho que desea ejercer y la información necesaria para identificar
              sus datos. Nex Digital podrá pedir una verificación razonable de identidad antes
              de responder, sin solicitar información excesiva.
            </p>
            <div className="overflow-hidden rounded-xl border border-[#EAE9E9]/10">
              {[
                ["Acceso", "Hasta 10 días hábiles"],
                ["Rectificación", "Hasta 5 días hábiles"],
                ["Cancelación", "Hasta 10 días hábiles"],
                ["Portabilidad", "Hasta 10 días hábiles"],
                ["Oposición", "Efecto inmediato, salvo causa legal aplicable"],
              ].map(([right, term]) => (
                <div
                  key={right}
                  className="grid gap-1 border-b border-[#EAE9E9]/10 px-4 py-3 last:border-b-0 sm:grid-cols-[150px_1fr] sm:gap-4"
                >
                  <span className="font-host font-semibold text-[#EAE9E9]">{right}</span>
                  <span>{term}</span>
                </div>
              ))}
            </div>
            <p>
              Si considera que sus derechos han sido vulnerados, la persona puede acudir
              ante la Autoridad Nacional de Transparencia y Acceso a la Información de Panamá.
            </p>
          </PrivacySection>

          <PrivacySection id="seguridad" number="10" title="Seguridad, menores y actualizaciones" icon={ShieldCheck}>
            <p>
              Nex Digital aplicará medidas razonables para proteger la información, limitar
              el acceso, mantener la confidencialidad y evitar pérdidas, alteraciones o usos
              no autorizados. Sin embargo, ningún sistema o transmisión por Internet puede
              garantizar seguridad absoluta.
            </p>
            <p>
              Los servicios de Nex Digital están dirigidos a personas con capacidad para
              contratar y a representantes de negocios. No se busca recopilar intencionalmente
              información de menores de edad. Si se detecta información de un menor recibida
              sin autorización adecuada, se eliminará cuando corresponda.
            </p>
            <p>
              No se utilizan decisiones automatizadas ni elaboración de perfiles para aprobar,
              rechazar o clasificar clientes. Nex Digital podrá actualizar esta política cuando
              cambien sus servicios o sus obligaciones. La versión vigente y su fecha estarán
              disponibles en esta página.
            </p>
          </PrivacySection>

          <section className="rounded-2xl border border-[#0465F1]/25 bg-gradient-to-r from-[#0465F1]/15 to-[#0D1520] p-6 md:p-8">
            <h2 className="font-host text-2xl font-bold">Contacto de privacidad</h2>
            <p className="mt-3 font-inter text-sm leading-7 text-[#EAE9E9]/75 md:text-base">
              Para consultar cómo se utiliza su información o ejercer un derecho relacionado
              con sus datos personales, puede escribir a nexdigitaldev@gmail.com con el asunto
              “Solicitud sobre datos personales”.
            </p>
          </section>
        </div>
      </div>

      <Bottom />
    </main>
  );
}

export default PrivacyPolicy;
