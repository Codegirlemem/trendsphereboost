import Header from '../components/dashboard/molecules/Header';
import Main from '../components/dashboard/Main';
import SideNav from '../components/dashboard/molecules/SideNav';

function Dashboard() {
  return (
    <div className="grid h-dvh grid-cols-dashboard grid-rows-[7rem_1fr]">
      <SideNav></SideNav>

      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default Dashboard;
