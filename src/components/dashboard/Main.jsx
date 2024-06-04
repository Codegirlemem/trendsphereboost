import { Outlet } from 'react-router-dom';
import BodyHeader from './molecules/BodyHeader';
import { useAuth } from '../../hooks/AuthContext';
// import { useAccountsProvider } from '../../context/AccountsProvider';

function Main() {
  const { path } = useAuth();
  // const { page } = useAccountsProvider();

  // const excludeBanner = ['success', 'error', 'social-media-campaign'];

  return (
    <main className="row-span-1 row-start-2 mr-20 font-montserrat text-black transition-all duration-500">
      {!path.includes('success') &&
        !path.includes('error') &&
        !path.includes('social-media-campaign') && <BodyHeader />}
      {/* {!path.includes(excludeBanner) && <BodyHeader />} */}
      {/* {page === 'checkout' && <BodyHeader />} */}

      <Outlet />
    </main>
  );
}

export default Main;
