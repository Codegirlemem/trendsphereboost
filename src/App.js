import { Route, Routes } from 'react-router-dom';
import './App.css';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ResetPassword from './components/forgot-password/ResetPassword';
import Verification from './components/forgot-password/Verification';
import NewPassword from './components/forgot-password/NewPassword';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './hooks/AuthContext';
import SocialMedia from './components/dashboard/Organisms/SocialMedia';
import Overview from './components/dashboard/Organisms/Overview';
import ContentBank from './components/dashboard/Organisms/ContentBank';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/trendsphereboost" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />}>
          DashboardSites
        </Route>
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/user-dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="content-bank" element={<ContentBank />} />
          <Route path="social-media-management" element={<SocialMedia />} />
        </Route>
      </Routes>{' '}
    </AuthProvider>
    // <div className="App">
    // </div>
  );
}

export default App;
