import { Outlet } from 'react-router-dom';
import BodyHeader from './molecules/BodyHeader';

function Main() {
  return (
    <main className="row-span-1 row-start-2 mr-20 font-montserrat text-black transition-all duration-500">
      <BodyHeader />

      <Outlet />
    </main>
  );
}

export default Main;
