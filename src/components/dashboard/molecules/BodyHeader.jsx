import { Link } from 'react-router-dom';
import SearchBox from '../atom/SearchBox';
import SkipBack from '../atom/SkipBack';
import WelcomeBanner from './WelcomeBanner';
import { useAuth } from '../../../hooks/AuthContext';

function BodyHeader() {
  const { showBanner } = useAuth();

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
