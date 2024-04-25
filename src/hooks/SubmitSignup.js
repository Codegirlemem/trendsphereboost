import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fetchAccounts } from './fetchAccounts';

const apiURL = 'http://localhost:9000/accounts';

function SubmitSignup(data) {
  const { userData, nextPage, setIsLoading, setFormError } = data;

  const navigate = useNavigate();
  const [appAccounts] = fetchAccounts(apiURL);

  const user = appAccounts.find((acc) => acc.email === userData.email);

  if (!user) {
    async function postAccount() {
      setIsLoading(true);
      try {
        const [appAccounts, appError] = fetchAccounts(apiURL);
        if (appAccounts) {
          const user = appAccounts.find((acc) => acc.email === userData.email);
          if (!user) {
            const response = await axios.post(apiURL, userData);
            if (response.status === 201) {
              navigate(nextPage);
            } else if (response.status !== 201) {
              throw new Error(`Error submitting data`);
            }
          }
          if (user) {
            setFormError(
              'This account already exist. Use a different email address!',
            );
          }
        }
        if (appError) {
          throw new Error(`Error ${appError}`);
        }
      } catch (error) {
        setFormError(`${error.code} ${error.message}`);
      }
    }
    postAccount();
  } else if (user) {
    setFormError('This account already exist. Use a different email address!');
  }
  return;
}

export default SubmitSignup;
