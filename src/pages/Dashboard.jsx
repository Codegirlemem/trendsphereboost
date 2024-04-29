import Header from '../components/dashboard/molecules/Header';
import Main from '../components/dashboard/Main';
import SideBar from '../components/dashboard/molecules/SideBar';
import { useAccountsProvider } from '../context/AccountsProvider';
import Footer from '../components/footer/Footer';

function Dashboard() {
  const { path } = useAccountsProvider();
  return (
    <div className=" grid h-dvh grid-cols-dashboard grid-rows-[max-content_1fr_auto]">
      <SideBar></SideBar>

      <Header></Header>
      <Main></Main>

      {path === '/user-dashboard/subscription-plans' && (
        <Footer>Find Us</Footer>
      )}
    </div>
  );
}

export default Dashboard;
