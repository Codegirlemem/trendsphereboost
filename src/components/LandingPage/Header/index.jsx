import { useState } from 'react';
import style from './style.module.css';

import trendSphere from '../../../assets/LandingPage/icons/trendsphere-icon.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={style.navbar2}>
      <div className={style.logoimage}>
        <Link to="/">
          <img src={trendSphere} alt="trendsphereboost logo" />
        </Link>
        <h2 className={style.trends}>
          Trendsphere
          <br /> Boost
        </h2>
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
        <li>
          <Link to="/login" className={style.signupButton}>
            Login
          </Link>
        </li>
      </ul>
      <button className={style.menuToggle} onClick={toogleMenu}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </button>
    </nav>
  );
};
