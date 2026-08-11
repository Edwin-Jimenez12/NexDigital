import { useEffect, useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { createWhatsAppLink, WHATSAPP_MESSAGES } from '../config/whatsapp'

function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menuItems = [
        { nombre: "Inicio", enlace: "/#inicio", },
        { nombre: "Conocenos", enlace: "/#conocenos", },
        { nombre: "Planes", enlace: "/planes", },
        { nombre: "Servicios", enlace: "/#servicios"},
        { nombre: "Proyectos", enlace: "/#proyectos", },
    ];
    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            {/* Barra principal */}
            <div className={`flex items-center justify-between bg-[#060D17] p-3 text-[#EAE9E9] transition-all duration-300 ${
                isScrolled
                    ? "md:bg-[#060D17]/90 md:shadow-lg md:backdrop-blur-md"
                    : "md:bg-transparent md:shadow-none md:backdrop-blur-none"
            }`}>
                {/* Logos */}
                <img src="/logo.svg" alt="Logo principal" className='h-15 w-auto hidden md:flex' />
                <img src="/n.svg" alt="Logo principal" className='h-10 w-auto md:hidden' />
                {/* Menu escritorio */}
                <div className="hidden md:flex gap-4 text-xl">
                    {menuItems.map((item) => (
                        <div key={item.nombre} className="group flex flex-col items-center text-[#EAE9E9]">
                            <a href={item.enlace} className="cursor-pointer duration-300 
                        group-hover:text-[#0465F1] font-host font-bold"> {item.nombre}</a>
                            <div className="w-full h-[3px] bg-[#0465F1] rounded-full scale-x-0 group-hover:scale-x-100 transition duration-300"></div>
                        </div>
                    ))}
                </div>
                {/* Contacto */}
                <a
                    href={createWhatsAppLink(WHATSAPP_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0465F1] cursor-pointer text-[#EAE9E9] py-3 px-6 rounded-md 
                hidden md:flex gap-2 items-center hover:bg-transparent transition duration-300 
                border-1 border-[#0465F1] hover:border-[#EAE9E9] text-lg font-host"
                >
                    <span className='font-host font-bold'>Hablemos</span> <FaWhatsapp className="h-6 w-auto  text-[#EAE9E9]" />
                </a>
                
                {/* Boton movil */}
                <button
                    type="button"
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((estadoActual) => !estadoActual)}
                    className="relative h-12 w-12 text-[#EAE9E9] md:hidden"
                >
                    <MenuIcon
                        className={`absolute inset-0 h-12 w-12 transition-all duration-300 ${isOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
                            }`}
                    />
                    <X
                        className={`absolute inset-0 h-12 w-12 transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                            }`}
                    />
                </button>
            </div>
            {/* Movil */}
            <div className={`absolute left-0 top-full z-50 flex w-full flex-col items-center gap-7
            overflow-hidden bg-black/10 text-xl backdrop-blur-md
            transition-all duration-500 md:hidden
                ${isOpen
                    ? "h-[calc(100dvh-72px)] opacity-100 py-4"
                    : "max-h-0 opacity-0 py-0"
                }`}>
                {/* Menu movil */}
                {menuItems.map((item) => (
                    <div key={item.nombre} className={`group flex flex-col items-center text-[#EAE9E9] `}>
                        <a href={item.enlace} className="cursor-pointer duration-300 
                        group-hover:text-[#0465F1] font-host font-bold"> {item.nombre}</a>
                        <div className="w-full h-[3px] bg-[#0465F1] rounded-full scale-x-0 group-hover:scale-x-100 transition duration-300"></div>
                    </div>
                ))}
                <a
                    href={createWhatsAppLink(WHATSAPP_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-md bg-[#0465F1] px-4 py-2 mt-10"
                >
                    <span className='font-host font-bold text-[#EAE9E9]'>Hablemos</span>
                    <FaWhatsapp className="h-6 w-auto text-[#EAE9E9]" />
                </a>
            </div>
        </header>
    )
} export default Menu
