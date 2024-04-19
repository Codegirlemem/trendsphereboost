import SiteNav from '../atom/SiteNav';
import UserNav from '../atom/UserNav';

function Navigation() {
  return (
    <div className="dashboardNav">
      <nav className="flex  items-center bg-white px-4 py-1  md:gap-10 xl:gap-24">
        <SiteNav />
        <UserNav />
      </nav>
    </div>
  );
}

export default Navigation;
