import "../index.css";
import style from "./ResetPassword.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import UserInput from "../UI/UserInput";
import Button from "../UI/Button";
import { BackArrow } from "../UI/FormIcons";
import Verification from "./Verification";

export default function ResetPassword() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const userData = { ...formData };
    console.log(userData);

    navigate("/reset-password/verification");
  }

  function handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }
  console.log(<Verification />);
  return (
    <main className={style.container}>
      <div>
        {/* <Verification /> */}
        <Link to="/login" className={style.goBack}>
          <BackArrow />
        </Link>

        {/* <CgArrowLeft /> */}

        <header className={style.header}>
          <h1>Reset Password</h1>
          <p>
            Enter the email address associated your account so we can send a
            link <br /> to reset your password
          </p>
        </header>

        <form onSubmit={handleSubmit} className={style.form}>
          <UserInput
            type="email"
            placeholder="Enter email"
            label="Enter Email"
            name="email"
            onChange={handleChange}
          />

          <Button color="#485F85" name="btnWide" btnType="Continue" />
        </form>
      </div>
    </main>
  );
}
