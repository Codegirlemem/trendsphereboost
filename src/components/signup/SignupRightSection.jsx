import style from './SignupRight.module.css';
import AccountForm from '../AccountForm';
import SignUpWith from './SignUpWith';
import { CheckboxAgreement } from '../../UI/FormIcons';
import { CheckAccount } from '../../UI/LoginSignup';
import DisplayError from '../../UI/DisplayError';
import { inputArray } from './data';

import { useSubmitForm } from '../../hooks/formhooks';
import { useAuth } from '../../hooks/AuthContext';
import { useStateContext } from '../../pages/StateProvider';

const data = {
  signup: true,
  type: 'signup',
  nextPage: '/login',
};

export default function SignupRightSection({ value, checked }) {
  const { login } = useAuth();
  const context = useStateContext();
  const { state, isValid } = context;
  const { inputValue } = state;
  console.log(isValid.current);
  const userData = {
    name: inputValue.userName?.trim()?.toLowerCase(),
    email: inputValue.userEmail?.trim()?.toLowerCase(),
    password: inputValue.userPassword?.trim()?.toLowerCase(),
  };
  // console.log(fetchAccounts('http://localhost:9000/accounts'));

  const [isLoading, formError, handleForm, setFormError] = useSubmitForm(
    userData,
    data,
    login,
    context,
  );
  console.log(inputValue);

  // throw new Error('erro boundary caught');

  // useUserData();
  // useEffect(() => {
  //   useUserData();
  // }, []);
  // console.log(fetchData);
  // console.log(fetchError);

  return (
    // Err
    <section className={style.container}>
      {isLoading && <div>Loading...</div>}
      {formError && (
        <DisplayError
          name="readBtn"
          btnType="Back"
          setError={setFormError}
          data={formError}
        />
      )}
      {!isLoading && !formError && (
        <div className={style.wrapper}>
          <h1 className={style.heading}>Create Account</h1>

          <div className={style.signup}>
            <AccountForm
              inputDetails={inputArray}
              btnType="Sign Up"
              submitForm={handleForm}
            >
              <div className={style.checkbox}>
                <CheckboxAgreement value={value} onChecked={checked} />
              </div>
            </AccountForm>
          </div>
          <SignUpWith signup={true}>
            <CheckAccount signup={true} />
          </SignUpWith>
        </div>
      )}
    </section>
  );
}
