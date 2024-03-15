import checkboxStyle from "./FormIcons.module.css";
import LogoImg from "../assets/icons/logo.svg";
import SignupImage from "../assets/images/signup-img.svg";

export function CheckboxAgreement({ children }) {
  return (
    <div className={checkboxStyle.checkboxDiv}>
      <input id={checkboxStyle.checkbox} type="checkbox" />
      {children}
    </div>
  );
}

export function Logo() {
  return (
    <div className={checkboxStyle.logo}>
      <div>
        {" "}
        <img src={LogoImg} alt="Trendsphere Boost logo" />
      </div>
      <span className={checkboxStyle.logoName}>Trendsphere Boost</span>
    </div>
  );
}

export function SignUpImage() {
  return (
    <div id={checkboxStyle.signupImgDiv}>
      <div id={checkboxStyle.signupImg}>
        <img src={SignupImage} alt="trendsphere boost connecting people" />
      </div>
    </div>
  );
}
