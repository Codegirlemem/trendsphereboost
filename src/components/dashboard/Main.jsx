import { Outlet } from 'react-router-dom';
import BodyHeader from './molecules/BodyHeader';
import { useAuth } from '../../hooks/AuthContext';
// import { useAccountsProvider } from '../../context/AccountsProvider';

function Main() {
  const { path } = useAuth();
  // const { page } = useAccountsProvider();

  return (
    <main className="row-span-1 row-start-2 mr-20 font-montserrat text-black transition-all duration-500">
      {!path.includes('success') && !path.includes('error') && <BodyHeader />}
      {/* {page === 'checkout' && <BodyHeader />} */}

      <Outlet />
    </main>
  );
}

export default Main;
