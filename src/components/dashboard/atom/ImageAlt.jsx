import { NavLink } from 'react-router-dom';
import { useAccountsProvider } from '../../../context/AccountsProvider';

function ImageAlt() {
  const {
    nameTypes: { initials },
  } = useAccountsProvider();
  // const names = useAccountsProvider();
  // console.log(names);
  // console.log(initials);

  return (
    <NavLink className=" flex h-full w-full items-center justify-center   rounded-full   bg-orange text-2xl font-semibold ring-2 ring-orange  ">
      {initials}
      {/* <UserImage /> */}
    </NavLink>
  );
}

export default ImageAlt;
