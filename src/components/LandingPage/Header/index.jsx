import { useState } from 'react';
import style from './style.module.css';

import { Link } from 'react-router-dom';
import { Logo } from '../../../UI/FormIcons';
import CustomButton from '../Button';
import { useAuth } from '../../../hooks/AuthContext';

export const Header = () => {
  const { headerRef } = useAuth();
  console.log(headerRef.current);

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
      {/* style.nav-list style.open */}
      {/* <ul className={isOpen ? 'nav-list open' : 'nav-list'}> */}

      <ul className={`${style['navList']} ${isOpen ? style['open'] : ''}`}>
        <li className={style.home}>
          <a href="#/home">Home</a>
        </li>
        <li>
          <a href="#/about">About</a>
        </li>
        <li>
          <a href="#/services">Services</a>
        </li>
        <li>
          <a href="#/contact">Contact</a>
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
