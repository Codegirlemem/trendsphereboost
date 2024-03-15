import styled from "styled-components";

import { Logo, SignUpImage } from "../UI/FormIcons";

const Section = styled.section`
  flex: 1;
  background-color: #002f5f;
  /* border-radius: 24px; */
  padding-left: 120px;
  padding-top: 60px;
  position: relative;
  overflow: hidden;
`;

const H2 = styled.h2`
  width: 466px;
  color: #fff;
  font-family: "Exo", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 51.2px */
  margin-bottom: 114px;
`;

export default function SignupLeftSection() {
  return (
    <Section>
      <Logo />

      <H2>
        Trendsphere Boost Empowering your online presence for success in the
        digital sphere
      </H2>

      <SignUpImage />
    </Section>
  );
}
