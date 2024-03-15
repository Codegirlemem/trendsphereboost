import styled from "styled-components";
import SignUpAccount from "../UI/SignUpAccount";

const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  margin-top: 35px;
`;

const H2 = styled.h2`
  width: 100%;
  border-bottom: 0.5px solid #ddd;
  text-align: center;
  line-height: 0.1em;
  margin-bottom: 40px;
`;

const Span = styled.span`
  padding: 0 11px;
  background-color: #ffffff;
`;

const Para = styled.p`
  color: #393939;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  margin-top: 35px;
`;

const Link = styled.a`
  color: #76bdbc;
  text-decoration-line: underline;
`;

export default function OptionalAccess() {
  return (
    <Options>
      <H2>
        <Span>Or sign up with</Span>
      </H2>
      <SignUpAccount />
      <Para>
        Already have an account?{" "}
        <Link href="https://www.facebook.com">Login</Link>
      </Para>
    </Options>
  );
}
