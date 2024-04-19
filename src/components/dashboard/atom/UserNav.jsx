import { NavLink } from 'react-router-dom';
import Avatar from '../../../assets/avatars/user-img.svg';
import Mail from '../../../assets/dashboard/mail.svg';
import Notification from '../../../assets/dashboard/notification.svg';

function UserNav() {
  return (
    <ul className="flex  w-2/5 text-darklue">
      <li>
        <NavLink to="/trendsphereboost">
          <img src={Notification} alt="notification icon" />
        </NavLink>{' '}
      </li>
      <li>
        <NavLink to="/trendsphereboost">
          <img src={Mail} alt="Message Icon" />
        </NavLink>
      </li>
      <li className="flex items-center gap-2">
        <div className="flex flex-col justify-center font-inter">
          <span className="text-lg">Jae Edike</span>{' '}
          <span className="text-sm">Admin</span>
        </div>
        <NavLink>
          <img src={Avatar} alt="User avatar" />
        </NavLink>
      </li>
    </ul>
  );
}

export default UserNav;
