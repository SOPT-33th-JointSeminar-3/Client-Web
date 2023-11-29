import styled from "styled-components";
import { IcCloseSmall, IcRadioEmpty, IcRadioFull } from "../../assets";

const CalHeader = () => {
  return (
    <Wrapper>
      <IcCloseSmall />
      <Title>날짜 선택</Title>
      <Buttons>
        <Button>
          <IcRadioFull />
          <span>왕복</span>
        </Button>
        <Button>
          <IcRadioEmpty />
          <span>편도</span>
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default CalHeader;

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  position: relative;
  padding: 1.8rem 1.6rem 2.4rem 1.6rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey_4};

  & > svg {
    position: absolute;
    top: 1rem;
    right: 1.6rem;
  }
`;
const Title = styled.h1`
  ${({ theme }) => theme.fonts.title_bold_20};
`;
const Buttons = styled.ul`
  display: flex;
  gap: 2.3rem;
`;
const Button = styled.li`
  display: flex;
  gap: 0.7rem;

  & > span {
    ${({ theme }) => theme.fonts.body_medium_12};
  }
`;
