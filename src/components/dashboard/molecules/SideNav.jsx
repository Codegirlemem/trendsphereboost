import { Link } from 'react-router-dom';
import { Logo } from '../../../UI/FormIcons';
import DashboardSites from '../atom/DashboardNav';
import Logout from '../atom/Logout';

function SideNav() {
  return (
    <div className="row-span-full flex flex-col justify-between bg-darklue px-[35px] py-[47px] text-white">
      <div className="flex flex-col gap-[56px]">
        <Link to="/" className="">
          <Logo logo="orange" />
        </Link>

        <div className="flex flex-col gap-[32px]">
          <DashboardSites />
        </div>
      </div>
      <Logout />
    </div>
  );
}

export default SideNav;
