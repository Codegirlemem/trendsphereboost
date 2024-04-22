import UserImage from '../atom/UserImage';
import WelcomeNav from '../atom/WelcomeNav';
import WelcomeText from '../atom/WelcomeText';

function WelcomeBar() {
  return (
    <div className="ml-8 flex flex-col gap-8 xl:flex-row xl:items-center ">
      <div className="flex items-center gap-6 bg-ash px-4 py-2">
        <div className="h-[120px] w-[120px]">
          <UserImage />
        </div>
        <div className="xl:mr-8">
          <WelcomeText />
        </div>
      </div>
      <WelcomeNav />
    </div>
  );
}

export default WelcomeBar;
