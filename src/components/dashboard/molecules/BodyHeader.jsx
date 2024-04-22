import SearchBox from '../atom/SearchBox';
import WelcomeBar from './WelcomeBar';

function BodyHeader() {
  return (
    <div className="font-montserrat">
      <SearchBox />
      <WelcomeBar />
    </div>
  );
}

export default BodyHeader;
