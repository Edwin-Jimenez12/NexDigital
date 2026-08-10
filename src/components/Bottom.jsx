import { ChevronRight, MapPin, Clock5, Mail } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaFacebook} from 'react-icons/fa6'
function Bottom() {
    const planes = ['Plan lunch', 'Plan Start', 'Plan Growth', 'Plan Bussiness', 'Plan Personalizado']
    const contactos = [
        { contacto: '+507 6509-4159', icon: FaWhatsapp },
        { contacto: 'nexdigitaldev@gmail.com', icon: Mail },
        { contacto: 'Ciudad de Panamá, Panamá', icon: MapPin },
        { contacto: 'Lun-Vie: 9:00 am-6:00 pm.', icon: Clock5 }
    ]
    const follow = [
        {follow: 'Instagram', icon: FaInstagram},
        {follow: 'Facebook', icon: FaFacebook},
        {follow: 'WhatsApp', icon: FaWhatsapp}
    ]
    return (
        <div className="bg-[#060D17] text-[#EAE9E9]/95 px-10 font-host py-5">
            <div className="flex flex-col md:flex-row justify-between gap-5">
                <div className="flex flex-col gap-4 items-start max-w-xs ">
                    <img src="/logo.svg" alt="" className="h-15 w-auto " />
                    <div className="hidden md:flex flex-col gap-2">
                        <p>Desarrollamos páginas web modernas, rápidas y funcionales
                            que ayudan a tu negocio a crecer en internet.
                        </p>
                        <div className="bg-[#0465F1] h-[1px] w-15 rounded hidden md:flex"></div>
                    </div>
                </div>
                {/* SERVICIOS */}
                <div className='flex flex-col gap-4'>
                    <div>
                        <h1 className='font-bold text-2xl'>Servicios</h1>
                        <div className="bg-[#0465F1] h-[1px] w-15 rounded md:flex"></div>
                    </div>
                    <div className='flex flex-col gap-1 cursor-pointer '>
                        {planes.map((plan) => (
                            <div
                                key={plan}
                                className="flex cursor-pointer justify-between gap-2 rounded-md px-2 py-1 transition-all duration-300 hover:scale-[1.03] hover:bg-[#0465F1]/15"
                            >
                                <h2>{plan}</h2>
                                <ChevronRight className="text-[#0465F1]" />
                            </div>
                        ))}
                    </div>
                </div>
                {/* CONTACTO */}
                <div className='flex flex-col gap-4'>
                    <div>
                        <h1 className='font-bold text-2xl'>Contacto</h1>
                        <div className="bg-[#0465F1] h-[1px] w-15 rounded md:flex mb-3"></div>
                        {contactos.map(({ contacto, icon: Icon }) => (
                            <div key={contacto} className='flex gap-2 py-1 pl-2'>
                                <Icon
                                    className={`shrink-0 text-[#0465F1] ${Icon === FaWhatsapp ? "size-6" : "size-6"
                                        }`}
                                /><span>{contacto}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* SIGUENOS */}
                <div className='flex flex-col'>
                        <h1 className='font-bold text-2xl'>Siguenos</h1>
                        <div className="bg-[#0465F1] h-[1px] w-15 rounded mb-2 flex "></div>
                        {follow.map(({ follow, icon: Icon }) => (
                            <div key={follow} className='flex gap-2 cursor-pointer hover:scale-103 transition-all duration-300'>
                                <a href="" className='hover:bg-[#0465F1]/15 flex flex-row  gap-2 py-1 rounded-md px-2'>
                                    <Icon
                                    className={`shrink-0 text-[#0465F1] ${Icon === FaWhatsapp ? "size-6" : "size-6"
                                        }`}
                                /><span>{follow}</span>
                                </a>
                            </div>
                        ))}
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center pt-3">
                <p className="hidden md:flex">© 2026 Nex Digital. Todos los derecho reservados.</p>
                <div className="flex flex-col md:flex-row items-center gap-5">
                    <p className="flex flex-col md:flex-row md:gap-2 items-center">
                        <span>Terminos y condiciones</span>
                        <div className="bg-[#EAE9E9] h-6 w-[1px] rounded hidden md:flex"></div>
                        <span>Politica de privacidad</span>
                    </p>
                    <div className="flex gap-2 items-center">
                        <div className="bg-[#EAE9E9] rounded-sm px-2 py-2">
                            <img src="/images/yappy-color-landscape.svg" alt="Yappy" className="h-5 w-auto" />
                        </div>
                        <div className="bg-[#EAE9E9] rounded-sm px-2 py-2" >
                            <img src="/images/Paypal.svg" alt="Yappy" className="h-5 w-auto" />
                        </div>
                    </div>
                </div>
                <p className="flex md:hidden text-center mt-5 md:mt-0">© 2026 Nex Digital. <br className="md:hidden" />Todos los derechos reservados.</p>
            </div>
        </div>
    )
} export default Bottom