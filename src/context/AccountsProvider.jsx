import { createContext, useContext, useState } from 'react';
import { useAuth } from '../hooks/AuthContext';
import { getNames } from '../utils/getNames';

const AccountContext = createContext();

function AccountsProvider({ children }) {
  const {
    state: { account },
  } = useAuth();
  const { name } = account.user;
  const nameTypes = getNames(name);
  const [page, setPage] = useState('checkout');

  return (
    <AccountContext.Provider value={{ nameTypes, account, page, setPage }}>
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
