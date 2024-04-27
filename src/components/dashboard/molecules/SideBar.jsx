import { Link } from 'react-router-dom';
import { Logo } from '../../../UI/FormIcons';
import AsideNav from '../atom/AsideNav';
import Logout from '../atom/Logout';
import { iconArray, iconArrayPayments } from '../atom/data';
import { useAccountsProvider } from '../../../context/AccountsProvider';

function SideBar() {
  const { showBanner } = useAccountsProvider();
  const {
    account: { userType },
  } = useAccountsProvider();
  // console.log(userType);
  let data = iconArray.filter((obj) => obj.id === 'overview');
  let array;
  if (showBanner) {
    if (userType === 'new') {
      array = data;
    } else {
      array = iconArray;
    }
  } else {
    array = iconArrayPayments;
  }

  return (
    <aside className="row-span-full flex flex-col justify-between bg-darklue px-6 py-[47px] text-white">
      <section className="flex flex-col gap-[56px]">
        <Link to="/" className="">
          <Logo logo="orange" />
        </Link>

        <div className="flex flex-col gap-[32px] ">
          <AsideNav array={array} />
        </div>
      </section>
      <Logout />
      {/* <Link className="hover:rounded hover:bg-orange hover:p-2">
        <Logout />
      </Link> */}
    </aside>
  );
}

export default SideBar;
