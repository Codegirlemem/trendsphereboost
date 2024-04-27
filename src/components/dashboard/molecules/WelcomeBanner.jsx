import { Link } from 'react-router-dom';
import UserImage from '../atom/UserImage';
import WelcomeText from '../atom/WelcomeText';
import SaveButton from '../content-bank/atom/SaveButton';
import { useAccountsProvider } from '../../../context/AccountsProvider';

function WelcomeBanner() {
  const {
    path,
    account: { userType },
  } = useAccountsProvider();

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
      {userType === 'new' && path.includes('overview') && (
        <Link to="subscription-plans">
          <SaveButton color="bg-orange" radius="rounded" padX="px-6">
            Start Free Trial
          </SaveButton>
        </Link>
      )}

      {/* <WelcomeNav /> */}
    </div>
  );
}

export default WelcomeBanner;

// SaveButton({ children, color, radius, padX }) {
//   return (
//     <button
//       className={`${color} ${radius} ${padX} py-2 text-center text-base text-white
//     `}
//     >
//       {children}
//     </button>
