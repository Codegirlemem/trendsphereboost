import socialDashboard from '../../../assets/LandingPage/images/social-dashboard-cuate 2.png';

import HeroText from './HeroText';
export const Hero = () => {
  return (
    <section>
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
