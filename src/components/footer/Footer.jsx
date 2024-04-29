import { Link } from 'react-router-dom';
import { Logo } from '../../UI/FormIcons';
import Services from './Services';
import Contact from './Contact';
import FollowUs from './FollowUs';
import Subscribe from './Subscribe';
import Arrow from '../../assets/LandingPage/icons/arrow-top.svg';
import { useAuth } from '../../hooks/AuthContext';
import { useScroll } from '../../hooks/ScrollContext';

function Footer({ children }) {
  const { scrollToView, headerRef, dashboardRef, contactRef } = useScroll();
  const { path } = useAuth();

  function scrollPath() {
    if (path === '/') {
      scrollToView(headerRef);
    } else scrollToView(dashboardRef);
  }

  return (
    <section
      ref={contactRef}
      className="relative row-span-1 row-start-3 flex items-start justify-between bg-[#ddd] p-10"
    >
      <span
        onClick={scrollPath}
        className="absolute right-10 top-[-12%] flex h-14 w-14 items-center justify-center rounded-full bg-orange"
      >
        <img src={Arrow} alt="" />
      </span>
      <div>
        <Link to="/" className="cursor-pointer">
          <Logo logo="orange" />
        </Link>
        <p className="absolute bottom-[15%] font-roboto text-sm">
          © 2024 Trendsphere Boost. All rights reserved
        </p>
      </div>

      <Services />
      <Contact>{children}</Contact>
      <FollowUs />
      <Subscribe />
    </section>
  );
}

export default Footer;
