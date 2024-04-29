import { NavLink } from 'react-router-dom';

function SiteNav() {
  return (
    <ul className="flex  flex-1 items-center justify-between pl-1 text-darklue">
      <li>
        <NavLink to="/trendsphereboost">Home</NavLink>
      </li>
      <li>
        <NavLink to="/trendsphereboost">About</NavLink>
      </li>
      <li>
        <NavLink to="/trendsphereboost">Services</NavLink>
      </li>
      <li>
        <NavLink to="/trendsphereboost">Contact</NavLink>
      </li>
    </ul>
  );
}

export default SiteNav;
