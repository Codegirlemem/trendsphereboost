import { createContext, useContext, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const initialState = {
  account: null,
  loginError: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'logged in':
      return {
        ...state,
        account: action.payload,
        isAuthenticated: true,
      };

    case 'logout':
      return {
        ...state,
        account: null,
        loginError: null,
        isAuthenticated: false,
      };

    default:
      throw new Error('Action is unknown');
  }
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const location = useLocation();
  const path = location.pathname;

  let showBanner;
  if (
    path.includes('overview') ||
    path.includes('content-bank') ||
    path.includes('social-media')
  ) {
    showBanner = true;
  } else {
    showBanner = false;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function login(email, password, account, setLoading, setError) {
    if (account.user.password === password) {
      dispatch({ type: 'logged in', payload: { ...account } });
      setLoading(false);
      navigate('/user-dashboard/overview');
    } else {
      dispatch({
        type: 'password incorrect',
        payload: 'Password is incorrect',
      });
      setError('Password is incorrect');
      setLoading(false);
    }
  }
  function logout() {
    dispatch({ type: 'logout' });
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        login,
        logout,
        path,
        showBanner,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('AuthContext was used outside of the AuthProvider');
  return context;
}
