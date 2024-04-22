import { useAuth } from '../../../hooks/AuthContext';
import LogoutIcon from '../../../assets/dashboard/icons/logout.svg';

function Logout() {
  //   const { logout } = useAuth();
  const { logout } = useAuth();
  return (
    <button className="flex items-center gap-5" onClick={() => logout()}>
      <img src={LogoutIcon} alt="logout icon" />
      <span>Logout</span>
    </button>
  );
}

export default Logout;
