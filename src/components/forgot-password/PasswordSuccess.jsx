import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../../UI/Button";

const Main = styled.main`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  font-family: "Montserrat", sans-serif;
`;

const H2 = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 38.4px */
  color: #000;
  text-align: center;
`;

const P = styled.p`
  font-size: 14px;
  text-align: center;
  line-height: 160%; /* 38.4px */
`;

export default function PasswordSuccess() {
  return (
    <Main>
      <Div>
        <H2>
          You succesfully changed your <br /> password
        </H2>
        <P>
          Please click the button below to proceed to login page with your email{" "}
          <br />
          and new password
        </P>
        <Link to="/login">
          <Button color=" #FF5733" name="btnWide" btnType="Proceed to login" />
        </Link>
      </Div>
    </Main>
  );
}
