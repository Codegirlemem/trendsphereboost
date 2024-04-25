import '../../index.css';
import style from './LoginLeft.module.css';
import AccountForm from '../AccountForm';
import SignUpWith from '../signup/SignUpWith';
import { CheckAccount, DividerText } from '../../UI/LoginSignup';
import { CheckboxAgreement } from '../../UI/FormIcons';
import { inputArray } from './data';
import { Logo } from '../../UI/FormIcons';

import { useSubmitForm } from '../../hooks/formhooks';

import DisplayError from '../../UI/DisplayError';
import { useAuth } from '../../hooks/AuthContext';
import { useStateContext } from '../../pages/StateProvider';
import { Link } from 'react-router-dom';

const data = { signup: false, type: 'login', nextPage: '/user-dashboard' };

export default function LoginLeftSection({ value, checked }) {
  const { state, login, dispatch } = useAuth();
  const context = useStateContext();

  const { inputValue, loginError } = context.state;
  const userData = {
    email: inputValue.userEmail?.trim()?.toLowerCase(),
    password: inputValue.userPassword?.trim()?.toLowerCase(),
    keepLoggedIn: inputValue.checkbox,
  };
  console.log(inputValue);
  const [isLoading, formError, handleForm, setFormError] = useSubmitForm(
    userData,
    data,
    login,
    context,
  );

  function resetError() {
    dispatch({ type: 'logout' });
  }

  return (
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
      {loginError && (
        <DisplayError
          name="readBtn"
          btnType="Back"
          setError={resetError}
          data={state.loginError}
        />
      )}
      {!isLoading && !formError && !loginError && (
        <div className={style.wrapper}>
          <div className={style.header}>
            <Link to="/" className="">
              <Logo logo="blue" className={style.logo} />
            </Link>

            <div>
              <h1 className={style.heading}>Welcome</h1>
              <p>Elevate your social reach, Elevate your brand</p>
            </div>
          </div>

          <div className={style.divider}>
            <DividerText signup={false} />
          </div>

          <div className={style.form}>
            <AccountForm
              inputDetails={inputArray}
              btnType="Login"
              submitForm={handleForm}
            >
              <div className={style.checkbox}>
                <CheckboxAgreement value={value} onChecked={checked} />
              </div>
            </AccountForm>
          </div>

          <SignUpWith signup={false}>
            <CheckAccount signup={false} />
          </SignUpWith>
        </div>
      )}
    </section>
  );
}
