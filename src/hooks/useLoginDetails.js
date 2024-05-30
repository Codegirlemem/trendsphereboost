import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useLoginDetails(
  newUser,
  setInputValue,
  account,
  validateForm,
  url,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  // const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  function getStoredAccounts() {
    const storedItems = localStorage.getItem('accounts');

    return storedItems ? JSON.parse(storedItems) : [];
  }

  function handleForm(event) {
    event.preventDefault();

    const accounts = getStoredAccounts();
    console.log(accounts);

    // function checkUser(accounts, newUser) {

    // }
    console.log(validateForm());

    if (validateForm()) {
      setIsLoading(true);
      try {
        const user = accounts.find((acc) => acc.email === newUser.email);
        console.log(user);
        if (!user) {
          setFormError('User does not exist.');
        } else if (user) {
          if (newUser.password) {
            if (newUser.password === user.password) {
              console.log(`User found`);
              navigate(url);
            } else {
              setFormError('Password is incorrect');
            }
          } else {
            navigate(url);
          }
        }

        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setFormError(err.message);
      } finally {
        setInputValue({ ...account });
      }
    } else {
      setIsLoading(false);
      setFormError('Ensure all input fields are filled or ticked');
    }
  }
  return [isLoading, formError, handleForm, setFormError];
}