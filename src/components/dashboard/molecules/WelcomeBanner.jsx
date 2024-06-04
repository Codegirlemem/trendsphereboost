import { Link } from 'react-router-dom';
import UserImage from '../atom/UserImage';
import WelcomeText from '../atom/WelcomeText';
import SaveButton from '../content-bank/atom/SaveButton';
import { useAccountsProvider } from '../../../context/AccountsProvider';
import { useAuth } from '../../../hooks/AuthContext';

function WelcomeBanner() {
  const {
    account: { userType },
  } = useAccountsProvider();
  const { path } = useAuth();

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
            <span className="text-xl font-medium">Start Free Trial</span>
          </SaveButton>
        </Link>
      )}
      {userType !== 'new' && path.includes('social-media-management') && (
        <Link to="subscription-plans">
          <SaveButton color="bg-orange" radius="rounded" padX="px-6">
            <span className="text-xl font-medium">Start Paid Subscription</span>
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
