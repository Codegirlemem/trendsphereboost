import { NavLink } from 'react-router-dom';
import { iconArray } from './data';

function DashboardNav() {
  return (
    <>
      {iconArray.map((arr) => {
        return (
          <NavLink to={arr.id} className="flexgap" key={arr.id}>
            <div>
              <img src={arr.icon} alt={arr.title} />
            </div>

            <div>{arr.title}</div>
          </NavLink>

          // <div className="flexgap" key={arr.id}>
          //   <div>
          //     <img src={arr.icon} alt={arr.title} />
          //   </div>

          //   <div>{arr.title}</div>
          // </div>
        );
      })}
    </>
  );
}

export default DashboardNav;
