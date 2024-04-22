import { NavLink } from 'react-router-dom';
import Mail from '../../../assets/dashboard/mail.svg';
import Notification from '../../../assets/dashboard/notification.svg';
import UserImage from './UserImage';
import { useAuth } from '../../../hooks/AuthContext';

function UserNav() {
  const {
    state: { loggedInUser },
  } = useAuth();
  const { name } = loggedInUser ? loggedInUser.user : '';
  // console.log(name);

  return (
    <ul className="flex w-2/5 gap-3 text-darklue xl:justify-between">
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
          <span className="hidden text-sm md:block xl:text-lg">{name}</span>{' '}
          <span className="text-sm">Admin</span>
        </div>
        <NavLink>
          <UserImage />
        </NavLink>
      </li>
    </ul>
  );
}

export default UserNav;
