import style from './LoopedItems.module.css';
import UserInput from '../UI/UserInput';

import Google from '../assets/icons/google.svg';
import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';
import Twitter from '../assets/icons/twitter.svg';
import Linkedin from '../assets/icons/linkedin.svg';

export function FormInputs(props) {
  const { signup, inputDetails, inputValue, handleChange, errors } = props;
  // const { signup, inputDetails, inputValue, handleChange, errors } = props;

  return inputDetails.map((detail, index) => {
    return (
      <UserInput
        key={`user_${detail.type}${index}`}
        signup={signup}
        data={detail}
        value={inputValue[detail.name]}
        errors={errors}
        handleChange={handleChange}
      />
    );
  });
}

const iconArray = [Google, Facebook, Instagram, Twitter, Linkedin];

export function OptionalAccounts() {
  return (
    <div id={style.accounts}>
      {iconArray.map((icon) => (
        <span id={style.account} key={icon}>
          <img src={icon} alt="" />
        </span>
      ))}
    </div>
  );
}
