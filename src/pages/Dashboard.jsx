import Header from '../components/dashboard/molecules/Header';
import Main from '../components/dashboard/Main';
import SideBar from '../components/dashboard/molecules/SideBar';

function Dashboard() {
  return (
    <div className="grid-ro grid h-dvh grid-cols-dashboard grid-rows-[max-content_1fr]">
      <SideBar></SideBar>

      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default Dashboard;
