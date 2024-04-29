import Main from '../components/dashboard/Main';
import SideBar from '../components/dashboard/molecules/SideBar';
import Footer from '../components/footer/Footer';
import DashboardHeader from '../components/dashboard/molecules/DashboardHeader';
import { useAuth } from '../hooks/AuthContext';

function Dashboard() {
  const { path } = useAuth();
  return (
    <div className=" grid h-dvh grid-cols-dashboard grid-rows-[max-content_1fr_auto]">
      <SideBar></SideBar>
      <DashboardHeader />
      <Main></Main>

      {path === '/user-dashboard/subscription-plans' && (
        <Footer>Find Us</Footer>
      )}
    </div>
  );
}

export default Dashboard;
