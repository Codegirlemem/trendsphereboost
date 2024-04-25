import { Header } from '../components/LandingPage/Header';
import { Hero } from '../components/LandingPage/Hero';
import { Icons } from '../components/LandingPage/Icons';
import { Stats } from '../components/LandingPage/Stats';
import { Profile } from '../components/LandingPage/Profile';
import { UpdatedNews } from '../components/LandingPage/UpdatedNews';
import { Footer } from '../components/LandingPage/Footer';
import { Trendsphere } from '../components/LandingPage/Trendsphere';

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
      <Footer />
    </div>
  );
}

export default LandingPage;
