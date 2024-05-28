import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import {
//   Route,
//   RouterProvider,
//   Routes,
//   createBrowserRouter,
// } from 'react-router-dom';

import { ScrollProvider } from './hooks/ScrollContext';
import { AuthProvider } from './hooks/AuthContext';
import LandingPage from './pages/LandingPage';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ResetPassword from './components/forgot-password/ResetPassword';
import NewPassword from './components/forgot-password/NewPassword';
import Dashboard from './pages/Dashboard';
import SocialMedia from './components/dashboard/Organisms/SocialMedia';
import Overview from './components/dashboard/Organisms/Overview';
import ContentBank from './components/dashboard/Organisms/ContentBank';
import PageError from './components/PageError';
import ProtectedRoutes from './pages/ProtectedRoutes';
import AccountsProvider from './context/AccountsProvider';
import SubscriptionPlans from './pages/SubscriptionPlans';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './components/dashboard/checkout/CheckoutSuccess';
import AppLayout from './pages/AppLayout';

const router = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <ScrollProvider>
          <AppLayout />
        </ScrollProvider>
      </AuthProvider>
    ),

    children: [
      {
        path: '/',
        element: (
          <AuthProvider>
            <ScrollProvider>
              <LandingPage />
            </ScrollProvider>
          </AuthProvider>
        ),
      },
      {
        path: '/signup',
        element: (
          <PageError fallback="Please reload the page">
            <SignUp />
          </PageError>
        ),
      },
      {
        path: '/login',
        element: (
          <PageError fallback="Please reload the page">
            <Login />
          </PageError>
        ),
      },
      {
        path: '/reset-password',
        element: (
          <PageError fallback="Please reload the page">
            <ResetPassword />
          </PageError>
        ),
      },
      {
        path: '/new-password',
        element: (
          <PageError fallback="Please reload the page">
            <NewPassword />
          </PageError>
        ),
      },
      {
        path: '/user-dashboard',
        element: (
          <ProtectedRoutes>
            <AccountsProvider>
              <ScrollProvider>
                <Dashboard />
              </ScrollProvider>
            </AccountsProvider>
          </ProtectedRoutes>
        ),
        children: [
          {
            path: 'overview',
            element: <Overview />,
          },
          {
            path: 'content-bank',
            element: <ContentBank />,
          },
          {
            path: 'social-media-management',
            element: <SocialMedia />,
          },
          {
            path: 'subscription-plans',
            element: <SubscriptionPlans />,
          },
          {
            path: 'success',
            element: <CheckoutSuccess />,
          },
          {
            path: 'checkout/:plan',
            element: <Checkout />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />

    // <div className="App">
    // </div>
  );
}

// function App() {
//   return (
//     <AuthProvider>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <ScrollProvider>
//               <LandingPage />
//             </ScrollProvider>
//           }
//         />

//         <Route
//           path="/signup"
//           element={
//             <PageError fallback="Please reload the page">
//               <SignUp />
//             </PageError>
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <PageError fallback="Please reload the page">
//               <Login />
//             </PageError>
//           }
//         />
//         <Route
//           path="/reset-password"
//           element={
//             <PageError fallback="Please reload the page">
//               <ResetPassword />
//             </PageError>
//           }
//         />

//         <Route
//           path="/new-password"
//           element={
//             <PageError fallback="Please reload the page">
//               <NewPassword />
//             </PageError>
//           }
//         />

//         <Route
//           path="/user-dashboard"
//           element={
//             <ProtectedRoutes>
//               <AccountsProvider>
//                 <ScrollProvider>
//                   <Dashboard />
//                 </ScrollProvider>
//               </AccountsProvider>
//             </ProtectedRoutes>
//           }
//         >
//           <Route index element={<Overview />} />
//           <Route path="overview" element={<Overview />} />
//           <Route path="content-bank" element={<ContentBank />} />
//           <Route path="social-media-management" element={<SocialMedia />} />
//           <Route
//             path="subscription-plans"
//             element={<SubscriptionPlans />}
//           ></Route>
//           <Route index path="success" element={<CheckoutSuccess />} />
//           <Route path="checkout/:plan" element={<Checkout />}></Route>
//         </Route>
//       </Routes>
//     </AuthProvider>
//     // <div className="App">
//     // </div>
//   );
// }

export default App;
