import { Outlet } from 'react-router-dom';
import BodyHeader from './molecules/BodyHeader';

function Main() {
  return (
    <div className="row-start-2 mr-20 font-montserrat text-black">
      <BodyHeader />

      <Outlet />
      <img className="h-8" src="/user-img.svg" alt="" />
    </div>
  );
}

export default Main;
