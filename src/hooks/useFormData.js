import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitData } from '../utils/submitData';

// const api_URL = 'http://localhost:9000/accounts';

export function useSubmitForm(userData, data, login, context) {
  const { type, nextPage } = data;
  const { isValid } = context;
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  function handleForm(event) {
    event.preventDefault();
    const useData = {
      setFormError,
      setIsLoading,
      navigate,
      nextPage,
      login,
      userData,
      type,
    };

    if (isValid.current) {
      if (type === 'signup' || type === 'login') {
        setIsLoading(true);
        submitData(useData);
      } else if (type === 'reset-password') {
      }
    } else {
      setFormError('Ensure all input fields are filled or ticked');
    }

    // if (isValid.current) {
    //   if (type === 'signup' || type === 'login') {
    //     async function submitData() {
    //       try {
    //         const appAccounts = await fetchAccounts(api_URL);
    //         const user = appAccounts.find(
    //           (acc) => acc.email === userData.email,
    //         );
    //         if (user) {
    //           if (type === 'signup') {
    //             setIsLoading(false);
    //             setFormError(
    //               'User already exist, sign up with a different email address',
    //             );
    //           } else
    //             login(
    //               userData.email?.toLowerCase(),
    //               userData.password?.toLowerCase(),
    //             );
    //         } else if (!user) {
    //           if (type === 'login') {
    //             setIsLoading(false);
    //             setFormError('User not found! Invalid email address!');
    //           } else {
    //             async function postData() {
    //               try {
    //                 const response = await axios.post(api_URL, userData);
    //                 return response;

    //                 // const response = await axios.post(api_URL, userData);
    //                 // if (response.status === 201) setIsLoading(false);
    //                 // navigate('/login');
    //                 //  move to next page
    //               } catch (error) {
    //                 // setIsLoading(false);
    //                 return error;
    //                 // setFormError(`${error.code}: ${error.message}`);
    //                 // console.error(`${error.code}: ${error.message}`);
    //               }
    //             }

    //             postData(url, data)
    //               .then()
    //               .catch((error) => {
    //                 setFormError(`${error.code}: ${error.message}`);
    //                 console.error(`${error.code}: ${error.message}`);
    //               });
    //           }
    //           // submitAccount(values);
    //         }
    //       } catch (error) {
    //         setIsLoading(false);
    //         console.error('There was a problem fetching accounts data:', error);
    //         setFormError('There was a problem fetching accounts data.');
    //       }
    //     }
    //   }
    // } else if (type === 'reset-password') {
    // }
  }
  // else if (!isValid.current) {
  //   setFormError('Ensure all input fields are filled or ticked');
  // }

  return [isLoading, formError, handleForm, setFormError];
}
