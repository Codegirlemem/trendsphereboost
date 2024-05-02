import { NavLink } from 'react-router-dom';

function AsideNav({ array }) {
  const active = 'rounded bg-orange px-4  duration-200';

  const style = ' flex gap-4 transition:all py-2 item-center';

  return (
    <>
      {array.map((arr) => {
        return (
          <NavLink
            to={arr.id}
            key={arr.id}
            className={({ isActive }) => {
              return isActive ? active + style : style;
            }}
          >
            <img src={arr.icon} alt={arr.title} />

            <div>{arr.title}</div>
          </NavLink>
        );
      })}
    </>
  );
}

export default AsideNav;
