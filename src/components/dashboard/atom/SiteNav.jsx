import { NavLink } from 'react-router-dom';
import { useScroll } from '../../../hooks/ScrollContext';
import { useEffect, useRef } from 'react';
import { useAuth } from '../../../hooks/AuthContext';

const navName = ['Home', 'About', 'Services', 'Contact'];

function SiteNav() {
  const active = 'text-orange duration-200 border-b-2 border-orange pb-2';

  const { path } = useAuth();

  const { scrollToView, contactRef, aboutRef, servicesRef } = useScroll();

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

  return (
    <ul
      ref={navRef}
      className="flex  flex-1 items-center justify-between pl-1 text-xl font-medium text-darklue "
    >
      {navName.map((name) => {
        return (
          <li key={name}>
            <NavLink
              to="/"
              key={name}
              className={({ isActive }) => {
                return isActive && path === '/' && name === 'Home'
                  ? active
                  : '';
              }}
            >
              {name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default SiteNav;
