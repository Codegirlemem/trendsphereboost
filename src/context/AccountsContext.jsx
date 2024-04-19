import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AccountsContext = createContext();

export function AccountsProvider(children) {
  let users;
  const [accounts, setAccounts] = useState([]);

  async function appAccounts(url) {
    try {
      const response = await axios.get(url);
      users = response.data;
      setAccounts(users);
      console.log(users);
      return users;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  console.log(appAccounts('http://localhost:9000/accounts'));

  return <AccountsContext.Provider>{children}</AccountsContext.Provider>;
}

export function useAccounts() {
  const context = useContext(AccountsContext);
  if (!context) {
    throw new Error(
      'Accounts context was used outside of its AccountsProvider',
    );
    return context;
  }
}
