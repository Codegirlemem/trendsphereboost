import style from "./FormIcons.module.css";
import BlueLogo from "../assets/icons/blueLogo.svg";
import OrangeLogo from "../assets/icons/orangeLogo.svg";
import SignupImage from "../assets/images/signup-img.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useEffect } from "react";

// CHECKBOX AND ITS AGREEMENT MESSAGE
export function CheckboxAgreement(props) {
  const { onChecked, handleData, signup, errors, value } = props;

  useEffect(
    function () {
      function setChanges() {
        handleData("checkbox", value);
      }
      setChanges();
    },
    [value]
  );

  const handleCheckbox = (e) => {
    onChecked(!value);
    handleData(e.target.name, !value);
    // {(e) => handleChange(e.target.name, e.target.value)}
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
              I agree to the{" "}
              <a className={style.conditions} href="https://www.facebook.com">
                terms of services
              </a>{" "}
              and{" "}
              <a className={style.conditions} href="https://www.facebook.com">
                privacy policy
              </a>
            </p>
          ) : (
            <p>Keep me logged in</p>
          )}
        </div>
        {/* <p>Please check the aggrement box</p> */}
        {signup && errors.checkbox === "Not checked" && !value && (
          <p className={style.errorMsg}>Please check the aggrement box</p>
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
        {" "}
        <img
          src={logo === "orange" ? OrangeLogo : BlueLogo}
          alt="Trendsphere Boost logo"
        />
      </div>
      <span
        style={
          logo === "orange"
            ? { fontSize: "17.266px", color: "#FF5733" }
            : { fontSize: "13.349px", color: "#0F3054" }
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
