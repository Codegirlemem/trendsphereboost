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
) {
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  const [users] = useFetchAccounts(apiURL);
  // const users = [];

  // const [state, dispatch] = useReducer(reducer, initialState)
  // useEffect(function () {
  //   const [users] = useAccounts(apiURL, setFormError);
  // }, []);

  // const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  // useAccounts(apiURL, setFormError);

  // async function getStoredAccounts() {
  //   const storedItems = localStorage.getItem("accounts");
  //   return storedItems ? JSON.parse(storedItems) : [];

  // }
  // const [users] = useAccounts(apiURL, setFormError);

  function handleForm(event) {
    event.preventDefault();

    console.log(users);
    // const accounts = getStoredAccounts();
    // const accounts = users ? [] : users;

    // const updatedUsers = [...accounts, newUser];
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
          const data = {
            user,
            userData,
            account,
            nextPage,
            setFormError,
            setInputValue,
            navigate,
          };
          console.log(users);
          console.log(data);
          // SubmitLoginData(data);
        }
      } else if (type === 'reset-password') {
      }
    } else {
      setFormError('Ensure all input fields are filled or ticked');
    }
  }
  return [isLoading, formError, handleForm, setFormError];
}

// function SubmitSignupData(data) {
//   const {
//     user,
//     userData,
//     account,
//     nextPage,
//     apiURL,
//     setIsLoading,
//     setFormError,
//     setInputValue,
//     navigate,
//   } = data;

//   if (!user) {
//     async function postAccount() {
//       //   const navigate = useNavigate();
//       setIsLoading(true);
//       try {
//         const response = await axios.post(apiURL, userData);

//         console.log(response);
//         if (response.status === 201) {
//           setInputValue({ ...account });
//           navigate(nextPage);
//         }
//       } catch (error) {
//         setFormError(`${error.code}: ${error.message}`);
//         console.log(error);
//         return error;
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     postAccount();
//   } else if (user) {
//     setFormError(
//       "This account already exist. Sign up with a different email acccount or go to Login and reset password if you have forgotten your password."
//     );
//   }
// }
