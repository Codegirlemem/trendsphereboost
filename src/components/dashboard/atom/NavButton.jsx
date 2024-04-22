import { NavLink } from 'react-router-dom';

function NavButton({ children = '', color = '', to = '' }) {
  const style =
    'text-md flex items-center justify-center rounded-lg border-[1px] border-darklue px-5 py-2 text-base';

  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive ? `${color} ${style}` : style;
      }}
    >
      <button>{children}</button>
    </NavLink>
  );
}

export default NavButton;
