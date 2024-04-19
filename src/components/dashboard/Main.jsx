import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div>
      dashboard body
      <Outlet />
      <img className="h-8" src="/user-img.svg" alt="" />
    </div>
  );
}

export default Main;
