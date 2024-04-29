import socialDashboard from '../../../assets/LandingPage/images/social-dashboard-cuate 2.png';
import { useScroll } from '../../../hooks/ScrollContext';
import HeroText from './HeroText';

export const Hero = () => {
  const { aboutRef } = useScroll();
  return (
    <section ref={aboutRef}>
      <div className="mt-20 flex items-center  justify-between bg-darklue py-10 pl-8 pr-20">
        <div className="w-[65%]">
          <img
            className="w-full"
            src={socialDashboard}
            alt="social dashboard"
          />
        </div>

        <HeroText />
      </div>
    </section>
  );
};
