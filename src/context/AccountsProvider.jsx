import { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';
import { getNames } from '../utils/getNames';

const AccountContext = createContext();

function AccountsProvider({ children }) {
  const {
    state: { account },
  } = useAuth();
  const { name } = account.user;
  const nameTypes = getNames(name);
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

  return (
    <AccountContext.Provider value={{ nameTypes, account, path, showBanner }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountsProvider() {
  const context = useContext(AccountContext);
  if (context === undefined)
    throw new Error('AccountContext was used outside of the AccountsProvider');
  return context;
}

export default AccountsProvider;
