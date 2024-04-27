import { useAuth } from '../../../hooks/AuthContext';
import LogoutIcon from '../../../assets/dashboard/icons/logout.svg';

function Logout() {
  //   const { logout } = useAuth();

  const { logout } = useAuth();
  return (
    <button
      className="flex items-center gap-4 py-2 transition-all hover:rounded hover:bg-orange hover:px-4  hover:duration-200 "
      onClick={() => logout()}
    >
      <img src={LogoutIcon} alt="logout icon" />
      <span>Logout</span>
    </button>
  );
}

export default Logout;
