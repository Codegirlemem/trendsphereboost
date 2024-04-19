import Header from '../components/dashboard/molecules/Header';
import Main from '../components/dashboard/Main';
import SideNav from '../components/dashboard/molecules/SideNav';
import { useFetchAccounts } from '../hooks/useFetchAccounts';

function Dashboard() {
  // const data = useFetchAccounts('http://localhost:9000/accounts');
  // console.log(data);
  // const [data, setData] = useState([]);

  // async function getAccounts(url) {
  //   try {
  //     const response = await axios.get(url);
  //     setData(response.data);
  //   } catch (err) {
  //     setData(`Error ${err.message}`);
  //   }
  // }
  // useEffect(() => {
  //   getAccounts('http://localhost:9000/accounts');
  //   console.log(data);
  // }, []);

  const [datas, error] = useFetchAccounts('http://localhost:9000/accounts');
  console.log(datas);
  console.log(error);

  // async function getAccounts(url) {
  //   try {
  //     const response = await axios.get(url);
  //     setData(response.data);
  //   } catch (err) {
  //     setData(`Error ${err.message}`);
  //   }
  // }

  // useEffect(() => {
  //   getAccounts('http://localhost:9000/accounts');
  // }, []);

  // console.log(data);
  // getAccounts('http://localhost:9000/accounts');
  // console.log(data);

  return (
    <div className="grid h-dvh grid-cols-dashboard grid-rows-2">
      <SideNav></SideNav>

      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default Dashboard;
