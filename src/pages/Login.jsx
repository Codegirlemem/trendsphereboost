import styled from "styled-components";
import LoginLeftSection from "../components/login/LoginLeftSection";
import LoginRightSection from "../components/login/LoginRightSection";

const Main = styled.main`
  background-color: #002f5f;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  min-height: 100dvh;
`;

export default function Login() {
  return (
    <div className="App">
      <Main>
        <LoginLeftSection />

        <LoginRightSection />
      </Main>
    </div>
  );
}
