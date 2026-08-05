import Menu from './components/Menu'
import Inicio from './assets/inicio/Inicio'

function App() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-[#000000]">
      <Menu className="absolute" />
      <div>
        <div className="relative">
          <Inicio />
          {/* Laptop */}
          <img
            src="/laptop.svg"
            alt="Laptop"
            className="absolute right-[6%] bottom-[10%] w-200"
          />
          {/* Celular */}
          <img
            src="/celular.svg"
            alt="Celular"
            className="absolute right-[5%] bottom-[10%] rotate-3 w-40 z-10"
          />
        </div>
      </div>
    </div>
  )
}

export default App
