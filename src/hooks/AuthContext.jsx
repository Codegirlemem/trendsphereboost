import { createContext, useContext, useReducer } from 'react';
// import { useAccounts } from './useFetchAccounts';

// const API_URL = 'http://localhost:9000/accounts';
const AuthContext = createContext();

const initialState = {
  loggedInUser: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { ...state, loggedInUser: action.payload, isAuthenticated: true };
    case 'logout':
      return { ...state, loggedInUser: null, isAuthenticated: false };
    default:
      throw new Error('Action is unknown');
  }
}

export function AuthProvider({ children }) {
  const [{ loggedInUser, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  // function login(email, password) {}

  // function logout() {}
  return (
    <AuthContext.Provider value={{ loggedInUser, isAuthenticated, dispatch }}>
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
