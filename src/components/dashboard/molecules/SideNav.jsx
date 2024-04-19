import { Link } from 'react-router-dom';
import { Logo } from '../../../UI/FormIcons';
import DashboardSites from '../atom/DashboardNav';

function SideNav() {
  return (
    <div className="row-span-2 flex flex-col justify-between bg-darklue px-[35px] py-[47px] text-white">
      <div className="flex flex-col gap-[56px]">
        <Link to="/trendsphereboost" className="">
          <Logo logo="orange" />
        </Link>

        <div className="flex flex-col gap-[32px]">
          <DashboardSites />
        </div>
      </div>
      <div>Logout</div>
    </div>
  );
}

export default SideNav;
