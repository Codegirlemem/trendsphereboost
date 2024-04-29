import { Route, Routes } from 'react-router-dom';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ResetPassword from './components/forgot-password/ResetPassword';
import NewPassword from './components/forgot-password/NewPassword';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './hooks/AuthContext';
import SocialMedia from './components/dashboard/Organisms/SocialMedia';
import Overview from './components/dashboard/Organisms/Overview';
import ContentBank from './components/dashboard/Organisms/ContentBank';
import PageError from './components/PageError';
import ProtectedRoutes from './pages/ProtectedRoutes';
import AccountsProvider from './context/AccountsProvider';
import SubscriptionPlans from './pages/SubscriptionPlans';
import { ScrollProvider } from './hooks/ScrollContext';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ScrollProvider>
              <LandingPage />
            </ScrollProvider>
          }
        />

        <Route
          path="/signup"
          element={
            <PageError fallback="Please reload the page">
              <SignUp />
            </PageError>
          }
        />
        <Route
          path="/login"
          element={
            <PageError fallback="Please reload the page">
              <Login />
            </PageError>
          }
        />
        <Route
          path="/reset-password"
          element={
            <PageError fallback="Please reload the page">
              <ResetPassword />
            </PageError>
          }
        />

        <Route
          path="/new-password"
          element={
            <PageError fallback="Please reload the page">
              <NewPassword />
            </PageError>
          }
        />

        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoutes>
              <AccountsProvider>
                <ScrollProvider>
                  <Dashboard />
                </ScrollProvider>
              </AccountsProvider>
            </ProtectedRoutes>
          }
        >
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="content-bank" element={<ContentBank />} />
          <Route path="social-media-management" element={<SocialMedia />} />
          <Route path="subscription-plans" element={<SubscriptionPlans />} />
        </Route>
      </Routes>
    </AuthProvider>
    // <div className="App">
    // </div>
  );
}

export default App;
