import "./App.css";
import { Header } from "./component/LandingPage/Header";
import { Hero } from "./component/LandingPage/Hero";
import { Icons } from "./component/LandingPage/Icons";
import { Stats } from "./component/LandingPage/Stats";
import { Profile } from "./component/LandingPage/Profile";
import { UpdatedNews } from "./component/LandingPage/UpdatedNews";
import { Footer } from "./component/LandingPage/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Icons />
      <Stats />
      <Profile />
      <UpdatedNews />
      <Footer />
    </div>
  );
}

export default App;
