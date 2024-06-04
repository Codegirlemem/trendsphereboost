import { Header } from '../components/LandingPage/Header';
import { Hero } from '../components/LandingPage/Hero';
import { Icons } from '../components/LandingPage/Icons';
import { Stats } from '../components/LandingPage/Stats';
import { Profile } from '../components/LandingPage/Profile';
import { UpdatedNews } from '../components/LandingPage/UpdatedNews';
import { Trendsphere } from '../components/LandingPage/Trendsphere';
import Footer from '../components/footer/Footer';

function LandingPage() {
  return (
    <div className="LandingPage">
      <Header />

      <Trendsphere />
      <Hero />
      <Icons />
      <Stats />
      <Profile />
      <UpdatedNews />
      <Footer>
        <p>
          Find Us -{' '}
          <span className="text-base text-[#0168E8]">
            {' '}
            http://www.minglingtrendsmarketing.com
          </span>{' '}
        </p>
      </Footer>
    </div>
  );
}

export default LandingPage;
