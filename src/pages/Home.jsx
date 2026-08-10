import Menu from "../components/Menu";
import Start from "../assets/start/Start";
import UsPart1 from "../assets/us/UsPart1";
import UsPart2 from "../assets/us/UsPart2";
import Bottom from "../components/Bottom";
import Proyects from "../assets/proyects/Proyects";

function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero con fondo */}
      <section
        className="relative min-h-dvh bg-cover bg-center"
        style={{
          backgroundImage: "url('/fondoInicio.png')",
        }}
      >
        <Menu />

        <div className="relative min-h-dvh">
          <Start />

          {/* Imagen Laptop */}
          <img
            src="/laptop.svg"
            alt="Laptop"
            className="absolute hidden transition-all duration-300
            md:bottom-[25%] md:right-[5%] md:block md:w-100
            lg:bottom-[14%] lg:right-[6%] lg:w-175"
          />

          {/* Imagen Celular */}
          <img
            src="/celular.svg"
            alt="Celular"
            className="absolute z-10 hidden rotate-3 transition-all duration-300
            md:bottom-[25%] md:right-[5%] md:block md:w-20
            lg:bottom-[14%] lg:right-[5%] lg:w-35"
          />
        </div>
      </section>

      {/* Resto de la página */}
      <UsPart1 />
      <Proyects />
      <UsPart2 />
      <Bottom />
    </main>
  );
}

export default Home;
