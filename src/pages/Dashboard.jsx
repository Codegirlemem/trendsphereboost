import Main from '../components/dashboard/Main';
import SideBar from '../components/dashboard/molecules/SideBar';
import Footer from '../components/footer/Footer';
import DashboardHeader from '../components/dashboard/molecules/DashboardHeader';
import { useAuth } from '../hooks/AuthContext';

// FOR BACKEND

// REFER TO SavedIdeas.jsx FILE TO VIEW NOTE ON DATABASE REQUIRED

function Dashboard() {
  const { path } = useAuth();
  return (
    <div className=" relative grid h-dvh grid-cols-dashboard grid-rows-[max-content_1fr_auto]">
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
