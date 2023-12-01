import styled from "styled-components";
import { IcCheckFinish, IcCloseSmall } from "../assets";
import { useNavigate } from "react-router-dom";

const FinishPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <header
        onClick={() => {
          navigate("/");
        }}
      >
        <IcCloseSmall />
      </header>
      <Content>
        <IcCheckFinish />
        <Text>항공편이 예약되었습니다.</Text>
      </Content>
      <Button type="button">예약내역 보기</Button>
    </Wrapper>
  );
};

export default FinishPage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 1.6rem;
  position: relative;

  & > header > svg {
    position: absolute;
    top: 0;
    right: 0;

    margin: 1rem 1.6rem 0 0;
  }
`;
const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const Text = styled.p`
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const Button = styled.button`
  width: 100%;
  padding: 1.4rem;

  background-color: ${({ theme }) => theme.colors.navy};
  border-radius: 1rem;
  border: 0;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_bold_14};
  cursor: pointer;
`;
