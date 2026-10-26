import Menu from '../components/Menu'
import Bottom from '../components/Bottom'
import Hero from '../sections/Hero'
import Clients from '../sections/Clients'
import Reasons from '../sections/Reasons'
import Services from '../sections/Services'
import Process from '../sections/Process'
import Projects from '../sections/Projects'
import AthlonX from '../sections/AthlonX'
import PlanFinder from '../sections/PlanFinder'
import ContactCTA from '../sections/ContactCTA'

function Home() {
  return (
    <>
      <Menu />
      <main>
        <Hero />
        <Clients />
        <Reasons />
        <Services />
        <Process />
        <Projects />
        <AthlonX />
        <PlanFinder />
        <ContactCTA />
      </main>
      <Bottom />
    </>
  )
}

export default Home
