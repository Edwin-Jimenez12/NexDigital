import { useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'

function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    const menuItems = [
        { nombre: "Inicio", enlace: "#inicio", },
        { nombre: "Nosotros", enlace: "#nosotros", },
        { nombre: "Planes", enlace: "#planes", },
        { nombre: "Proyectos", enlace: "#proyectos", },
    ];
    return (
        <header>
            {/* Barra principal */}
            <div className="flex justify-between text-[#EAE9E9] items-center p-3">
                {/* Logos */}
                <img src="/logo.svg" alt="Logo principal" className='h-15 w-auto hidden md:flex' />
                <img src="/n.svg" alt="Logo principal" className='h-10 w-auto md:hidden' />
                {/* Menu escritorio */}
                <div className="hidden md:flex gap-4 text-xl">
                    {menuItems.map((item) => (
                        <div key={item.nombre} className="group flex flex-col items-center text-[#EAE9E9]">
                            <a href={item.enlace} className="cursor-pointer duration-300 
                        group-hover:text-[#0465F1]"> {item.nombre}</a>
                            <div className="w-full h-[3px] bg-[#0465F1] rounded-full scale-x-0 group-hover:scale-x-100 transition duration-300"></div>
                        </div>
                    ))}
                </div>
                {/* Contacto */}
                <button className="bg-[#0465F1] cursor-pointer text-[#EAE9E9] py-3 px-6 rounded-md 
                hidden md:flex gap-2 items-center hover:bg-transparent transition duration-300 
                border-1 border-[#0465F1] hover:border-[#EAE9E9] text-lg"
                >
                    <span>Hablemos</span> <FaWhatsapp className="w-5  text-[#EAE9E9]" />
                </button>
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
            <div className={`flex flex-col items-center gap-7 text-xl bg-[#000000]
    overflow-hidden transition-all duration-500 md:hidden
    ${isOpen
                    ? "max-h-96 opacity-100 py-4"
                    : "max-h-0 opacity-0 py-0"
                }`}>
                {/* Menu movil */}
                {menuItems.map((item) => (
                    <div key={item.nombre} className={`group flex flex-col items-center text-[#EAE9E9] `}>
                        <a href={item.enlace} className="cursor-pointer duration-300 
                        group-hover:text-[#0465F1]"> {item.nombre}</a>
                        <div className="w-full h-[3px] bg-[#0465F1] rounded-full scale-x-0 group-hover:scale-x-100 transition duration-300"></div>
                    </div>
                ))}
                <button className="flex items-center justify-center gap-2 rounded-md bg-[#0465F1] px-4 py-2">
                    <span>Hablemos</span>
                    <FaWhatsapp className="w-5" />
                </button>
            </div>
        </header>
    )
} export default Menu