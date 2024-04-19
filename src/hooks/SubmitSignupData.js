import axios from "axios";

export function SubmitSignupData(data) {
  const {
    user,
    userData,
    account,
    nextPage,
    apiURL,
    setIsLoading,
    setFormError,
    setInputValue,
    navigate,
  } = data;

  if (!user) {
    async function postAccount() {
      //   const navigate = useNavigate();
      setIsLoading(true);
      try {
        const response = await axios.post(apiURL, userData);

        console.log(response);
        if (response.status === 201) {
          setInputValue({ ...account });
          navigate(nextPage);
        }
      } catch (error) {
        setFormError(`${error.code}: ${error.message}`);
        console.log(error);
        return error;
      } finally {
        setIsLoading(false);
      }
    }
    postAccount();
  } else if (user) {
    setFormError(
      "This account already exist. Sign up with a different email acccount or go to Login and reset password if you have forgotten your password."
    );
  }
  return;
}
