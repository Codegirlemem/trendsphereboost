import SiteNav from '../atom/SiteNav';
import UserNav from '../atom/UserNav';

function Navigation() {
  return (
    <section className="dashboardNav">
      <nav className="flex  items-center bg-white px-4 py-3  md:gap-10 xl:gap-24">
        <SiteNav />
        <UserNav />
      </nav>
    </section>
  );
}

export default Navigation;
