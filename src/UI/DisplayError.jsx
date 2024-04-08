import Button from "./Button";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const P = styled.p`
  font-size: 16px;
`;
export default function DisplayError({ name, btnType, setError, data }) {
  return (
    <Div>
      <P>{data}</P>

      <span onClick={() => setError(false)}>
        <Button color="#FF5733" name={name} btnType={btnType} />
      </span>
    </Div>
  );
}
