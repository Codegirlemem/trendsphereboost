import { NavLink } from 'react-router-dom';
import Mail from '../../../assets/dashboard/mail.svg';
import Notification from '../../../assets/dashboard/notification.svg';
// import UserImage from './UserImage';
// import { useAccountsProvider } from '../../../context/AccountsProvider';
import ImageAlt from './ImageAlt';

function UserNav() {
  return (
    <ul className="flex w-2/5 items-center gap-3 text-darklue xl:justify-between">
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
          <span className="hidden text-sm md:block xl:text-lg"></span>{' '}
        </div>
        <div className="h-10 w-10 ">
          <ImageAlt />
        </div>
      </li>
    </ul>
  );
}

export default UserNav;
