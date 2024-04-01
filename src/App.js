import { Route, Routes } from "react-router-dom";
import "./App.css";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Verification from "./pages/Verification";

import LandingPage from "./component/LandingPage/LandingPage.js";

function App() {
  return (
    <Routes>
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/trendsphereboost" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-password/verification" element={<Verification />} />
    </Routes>
    // <div className="App">
    // </div>
  );
  return <LandingPage />;
}

export default App;
