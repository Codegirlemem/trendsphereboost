import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitSignupData } from './SubmitSignupData';
import { useFetchAccounts } from './useFetchAccounts';

const apiURL = 'http://localhost:9000/accounts';

// const initialState = {
//   status: "default",

// }

// function reducer(state, action) {
//   switch(action.type) {
//     case ""
//   }
// }

export function useSubmitForm(
  userData,
  setInputValue,
  account,
  isValid,
  type,
  nextPage,
  login,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [users] = useFetchAccounts(apiURL);
  const navigate = useNavigate();

  function handleForm(event) {
    event.preventDefault();

    if (isValid) {
      if (type === 'signup' || type === 'login') {
        const user = users.find((acc) => acc.email === userData.email);

        if (type === 'signup') {
          const data = {
            user,
            userData,
            account,
            nextPage,
            apiURL,
            setIsLoading,
            setFormError,
            setInputValue,
            navigate,
          };
          SubmitSignupData(data);
        } else if (type === 'login') {
          login(
            userData.email?.toLowerCase(),
            userData.password?.toLowerCase(),
          );
        }
      } else if (type === 'reset-password') {
      }
    } else {
      setFormError('Ensure all input fields are filled or ticked');
    }
  }
  return [isLoading, formError, handleForm, setFormError];
}
