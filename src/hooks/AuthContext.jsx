import { createContext, useContext, useReducer, useRef } from 'react';
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

    // case 'logged in':
    //   return { ...state, loggedInUser: action.payload, isAuthenticated: true };

    case 'logout':
      return {
        ...state,
        account: null,
        loginError: null,
        isAuthenticated: false,
      };
    case 'unknown user':
      return { ...state, loginError: action.payload };
    case 'password incorrect':
      return { ...state, loginError: action.payload };
    case 'data error':
      return { ...state, loginError: action.payload };
    default:
      throw new Error('Action is unknown');
  }
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const path = useLocation();
  console.log(path);

  const headerRef = useRef();
  const dashboardRef = useRef();
  //   function setRef(name, oldRef) {
  // oldRef.current
  //   }

  function scrollToView() {
    console.log(headerRef.current);
    if (path.pathname === '/') {
      headerRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      dashboardRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
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
        scrollToView,
        headerRef,
        dashboardRef,
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
