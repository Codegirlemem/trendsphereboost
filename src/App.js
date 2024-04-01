import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Verification from "./pages/Verification";

function App() {
  return (
    <Routes>
      <Route path="/trendsphereboost" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-password/verification" element={<Verification />} />
    </Routes>
    // <div className="App">
    // </div>
  );
}

export default App;
