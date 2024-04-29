import Navigation from './Navigation';
import { useAuth } from '../../../hooks/AuthContext';

function Header() {
  const { dashboardRef } = useAuth();

  return (
    <header
      ref={dashboardRef}
      className="row-span-1 row-start-1 bg-lightblue py-6 pl-9 pr-20"
    >
      <Navigation />
    </header>
  );
}

export default Header;
