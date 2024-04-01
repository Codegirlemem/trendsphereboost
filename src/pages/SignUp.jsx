import styled from "styled-components";
import SignupLeftSection from "../components/signup/SignupLeftSection";
import SignupRightSection from "../components/signup/SignupRightSection";

const Main = styled.main`
  background-color: #002f5f;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  display: flex;
  min-height: 100dvh;
`;

function SignUp() {
  return (
    <div className="App">
      <Main>
        <SignupLeftSection />

        <SignupRightSection />
      </Main>
    </div>
  );
}

export default SignUp;
