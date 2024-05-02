import { useState } from 'react';
import style from './style.module.css';

import { Link } from 'react-router-dom';
import { Logo } from '../../../UI/FormIcons';
import CustomButton from '../Button';
import { useScroll } from '../../../hooks/ScrollContext';
import SiteNav from '../../dashboard/atom/SiteNav';

export const Header = () => {
  const { headerRef } = useScroll();

  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section ref={headerRef} className={style.navbar2}>
      <div className={style.logoimage}>
        <Link to="/" className="cursor-pointer">
          <Logo logo="orange" />
        </Link>
      </div>

      <nav className={`${style['navList']} ${isOpen ? style['open'] : ''}`}>
        <SiteNav />
      </nav>

      <Link to="/login">
        <CustomButton width="w-[170px]">Login</CustomButton>
      </Link>

      <button className={style.menuToggle} onClick={toogleMenu}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </button>
    </section>
  );
};
