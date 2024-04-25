import style from './FormIcons.module.css';
import BlueLogo from '../assets/icons/blueLogo.svg';
import OrangeLogo from '../assets/icons/orangeLogo.svg';
import SignupImage from '../assets/images/signup-img.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { useState } from 'react';
import { useStateContext } from '../pages/StateProvider';
import useValidate from '../hooks/useValidate';

// CHECKBOX AND ITS AGREEMENT MESSAGE
export function CheckboxAgreement({ value, onChecked }) {
  // const { onChecked, handleData, signup, errors, value } = props;
  const {
    handleInputChange,
    signup,
    passwordMatch,
    isValid,
    validationErrors,
  } = useStateContext();
  // const { inputErrors, inputValue } = state;
  const [showError, setShowError] = useState(false);
  useValidate(
    'checkbox',
    value,
    signup,
    setShowError,
    passwordMatch,
    isValid,
    validationErrors,
  );

  const handleCheckbox = (e) => {
    const newValue = !value;
    onChecked(newValue);
    console.log(value);
    handleInputChange(e);
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.checkboxDiv}>
          <input
            id={style.checkbox}
            type="checkbox"
            name="checkbox"
            value={value}
            checked={value}
            onChange={handleCheckbox}
          />
          {signup ? (
            <p>
              I agree to the{' '}
              <a className={style.conditions} href="https://www.facebook.com">
                terms of services
              </a>{' '}
              and{' '}
              <a className={style.conditions} href="https://www.facebook.com">
                privacy policy
              </a>
            </p>
          ) : (
            <p>Keep me logged in</p>
          )}
        </div>
        {/* <p>Please check the aggrement box</p> */}
        {signup && !value && showError && (
          <p className={style.errorMsg}>Please check the box to proceed</p>
        )}
      </div>
      {!signup && (
        <span>
          <Link className={style.password} to="/reset-password">
            Forgot Password
          </Link>
        </span>
      )}
    </div>
  );
}

// TRENDSPHERE BOOST LOGO

export function Logo({ logo }) {
  return (
    <div className={style.logo}>
      <div>
        {' '}
        <img
          src={logo === 'orange' ? OrangeLogo : BlueLogo}
          alt="Trendsphere Boost logo"
        />
      </div>
      <span
        style={
          logo === 'orange'
            ? { fontSize: '17.266px', color: '#FF5733' }
            : { fontSize: '13.349px', color: '#0F3054' }
        }
        className={style.logoName}
      >
        Trendsphere <br /> Boost
      </span>
    </div>
  );
}

// IMAGE ON THE SIGNUP PAGE

export function SignUpImage() {
  return (
    <div id={style.signupImgDiv}>
      <div id={style.signupImg}>
        <img src={SignupImage} alt="trendsphere boost connecting people" />
      </div>
    </div>
  );
}

// GO BACK ARROW
const GoBack = styled(BsArrowLeft)`
  /* color: #3f5579; */
  transform: scale(1.5);
`;

export function BackArrow() {
  return <GoBack />;
}
