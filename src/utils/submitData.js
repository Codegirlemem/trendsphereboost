// import { fetchAccounts } from '../hooks/fetchAccounts';
import { getNames } from './getNames';
import { getLocalStorageItem, setLocalStorageItem } from './localStorageTasks';
import { addItemsToArray } from './tasks';
// import { postData } from './postData';

// Use when no api to make use of local storage as endpoint
export async function submitData(data) {
  const {
    setFormError,
    setIsLoading,
    navigate,
    nextPage,
    login,
    userData,
    type,
  } = data;
  try {
    const appAccounts = getLocalStorageItem('Accounts');

    const account = appAccounts
      ? appAccounts.find((acc) => acc.user.email === userData.email)
      : null;
    if (account) {
      if (type === 'signup') {
        setIsLoading(false);
        setFormError(
          'User already exist! Sign up with a different email address',
        );
      } else
        login(
          userData.email?.toLowerCase(),
          userData.password?.toLowerCase(),
          account,
          setIsLoading,
          setFormError,
        );
    } else if (!account) {
      if (type === 'login') {
        setIsLoading(false);
        setFormError('User not found! Invalid email address!');
      } else {
        const date = new Date();
        const { firstName } = getNames(userData.name);

        const newAccount = {
          user: { ...userData },
          id: firstName.toLowerCase() + date.toISOString(),
          creationDate: date.toISOString(),
          userType: 'new',
        };

        const accounts = addItemsToArray(newAccount, appAccounts);

        setLocalStorageItem('Accounts', accounts);
        setIsLoading(false);
        navigate(nextPage);
      }
    }
  } catch (error) {
    setIsLoading(false);
    setFormError('There was a problem fetching accounts data.', error);
  }
}

// use when backend api is read
// export async function submitData(data) {
//   const {
//     setFormError,
//     setIsLoading,
//     navigate,
//     nextPage,
//     login,
//     userData,
//     type,
//   } = data;

//   try {
//     console.log(userData);
//     const appAccounts = await fetchAccounts('http://localhost:9000/accounts');
//     console.log(appAccounts);
//     const accounts = await appAccounts;
//     console.log(accounts);
//     console.log(type);
//     const user = await appAccounts.find((acc) => acc.email === userData.email);
//     if (user) {
//       if (type === 'signup') {
//         setIsLoading(false);
//         setFormError(
//           'User already exist! Sign up with a different email address',
//         );
//       } else
//         login(
//           userData.email?.toLowerCase(),
//           userData.password?.toLowerCase(),
//           user,
//           setIsLoading,
//           setFormError,
//         );
//     } else if (!user) {
//       if (type === 'login') {
//         setIsLoading(false);
//         setFormError('User not found! Invalid email address!');
//       } else {
//         postData('http://localhost:9000/accounts', data)
//           .then((res) => {
//             if (res.status === 201) setIsLoading(false);
//             navigate(nextPage);
//           })
//           .catch((error) => {
//             setFormError(`${error.code}: ${error.message}`);
//             console.error(`${error.code}: ${error.message}`);
//           });
//       }
//       // submitAccount(values);
//     }
//   } catch (error) {
//     setIsLoading(false);
//     console.error('There was a problem!', error.code);
//     setFormError('There was a problem fetching accounts data.', error);
//   }
// }
