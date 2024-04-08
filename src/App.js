import { Route, Routes } from "react-router-dom";
import "./App.css";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ResetPassword from "./components/forgot-password/ResetPassword";
import Verification from "./components/forgot-password/Verification";
import NewPassword from "./components/forgot-password/NewPassword";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/trendsphereboost" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-password/verification" element={<Verification />} />
      <Route path="/reset-password/new-password" element={<NewPassword />} />
    </Routes>
    // <div className="App">
    // </div>
  );
}

export default App;
