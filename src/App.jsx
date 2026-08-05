import Menu from './components/Menu'
import Inicio from './assets/inicio/Inicio'

function App() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-[#000000]">
      <Menu className="absolute" />
      <div>
        <div className="relative ">
          <Inicio/>
          {/* Laptop */}
          <img src="/laptop.svg" alt="Laptop"
            className="absolute lg:right-[6%] lg:bottom-[14%] md:right-[5%] md:bottom-[25%] 
            lg:w-175 md:w-100 w-50  md:flex hidden transition-all duration-300"
          />
          {/* Celular */}
          <img src="/celular.svg" alt="Celular"
            className="absolute lg:right-[5%] lg:bottom-[14%] md:right-[5%] md:bottom-[25%] 
            rotate-3 lg:w-35 md:w-20 w-10 z-10 md:flex hidden transition-all duration-300"
          />
        </div>
      </div>
    </div>
  )
}

export default App
