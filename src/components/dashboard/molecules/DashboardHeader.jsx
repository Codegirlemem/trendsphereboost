import Navigation from './Navigation';
import { useScroll } from '../../../hooks/ScrollContext';

function DashboardHeader() {
  const { dashboardRef } = useScroll();

  return (
    <header
      ref={dashboardRef}
      className="row-span-1 row-start-1 bg-lightblue py-6 pl-9 pr-20"
    >
      <Navigation />
    </header>
  );
}

export default DashboardHeader;
