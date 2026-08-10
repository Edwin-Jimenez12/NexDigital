import Menu from '../components/Menu'
import PlanSections from '../assets/plans/PlansSections'
import Bottom from '../components/Bottom';
import Launch from '../assets/plans/Launch'
import Start from '../assets/plans/Start'
import Growth from '../assets/plans/Growth'
import Bussiness from '../assets/plans/Bussiness'
import Personalized from '../assets/plans/Personalized'
import Comparison from '../assets/plans/Comparison'
import PlanAdvisor from '../assets/plans/PlanAdvisor'

function Plans() {
  return (
    <main>
      <section
        className="relative min-h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/FondoPlans.png')",
        }}
      >
        <Menu />
        <div className="flex min-h-[500px] items-center justify-center pt-[72px]">
          <PlanSections />
        </div>
      </section>
      <div className="flex items-stretch justify-between gap-2 p-10">
        <Launch/>
        <Start/>
        <Growth/>
        <Bussiness/>
      </div>
      <Personalized />
      <Comparison />
      <PlanAdvisor />
      <Bottom />
    </main>
  );
}

export default Plans;
