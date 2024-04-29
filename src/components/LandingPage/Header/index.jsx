import { useEffect, useRef, useState } from 'react';
import style from './style.module.css';

import { Link } from 'react-router-dom';
import { Logo } from '../../../UI/FormIcons';
import CustomButton from '../Button';
import { useScroll } from '../../../hooks/ScrollContext';

export const Header = () => {
  const { headerRef, scrollToView, contactRef, aboutRef, servicesRef } =
    useScroll();

  const navRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      event.target.textContent === 'Contact' && scrollToView(contactRef);
      event.target.textContent === 'About' && scrollToView(aboutRef);
      event.target.textContent === 'Services' && scrollToView(servicesRef);
    };

    const navList = navRef.current;
    navList.addEventListener('click', handleClick);

    return () => {
      navList.removeEventListener('click', handleClick);
    };
  }, [aboutRef, contactRef, servicesRef, scrollToView]);

  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav ref={headerRef} className={style.navbar2}>
      <div className={style.logoimage}>
        <Link to="/" className="cursor-pointer">
          <Logo logo="orange" />
        </Link>
      </div>

      <ul
        ref={navRef}
        className={`${style['navList']} ${isOpen ? style['open'] : ''}`}
      >
        <li className={style.home}>
          <Link href="#/home">Home</Link>
        </li>
        <li>
          <Link href="#/about">About</Link>
        </li>
        <li>
          <Link href="#/services">Services</Link>
        </li>
        <li>
          <Link href="#/contact">Contact</Link>
        </li>
      </ul>
      <Link to="/login">
        <CustomButton width="w-[170px]">Login</CustomButton>
      </Link>
      <button className={style.menuToggle} onClick={toogleMenu}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </button>
    </nav>
  );
};
