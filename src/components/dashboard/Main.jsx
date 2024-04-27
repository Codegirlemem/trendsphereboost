import { Outlet } from 'react-router-dom';
import BodyHeader from './molecules/BodyHeader';

function Main() {
  return (
    <main className="row-start-2 mr-20 font-montserrat text-black transition-all duration-500">
      <BodyHeader />

      <Outlet />
      <img className="h-8" src="/user-img.svg" alt="" />
    </main>
  );
}

export default Main;
