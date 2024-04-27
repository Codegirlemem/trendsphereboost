import { Link } from 'react-router-dom';
import { useAccountsProvider } from '../../../context/AccountsProvider';
import SearchBox from '../atom/SearchBox';
import SkipBack from '../atom/SkipBack';
import WelcomeBanner from './WelcomeBanner';

function BodyHeader() {
  const { showBanner } = useAccountsProvider();

  return (
    <div className="font-montserrat">
      {!showBanner && (
        <Link to="overview" className="mb-8 ml-10 mt-10 block">
          <SkipBack>Dashboard</SkipBack>
        </Link>
      )}

      <SearchBox />
      {showBanner && <WelcomeBanner />}
    </div>
  );
}

export default BodyHeader;
