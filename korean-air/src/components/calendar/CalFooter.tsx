import styled from "styled-components";

const CalFooter = () => {
  return (
    <Wrapper>
      <Range>
        <span>가는 날</span>
        <span>~</span>
        <span>오는 날</span>
      </Range>
      <Button>선택</Button>
    </Wrapper>
  );
};

export default CalFooter;

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  position: fixed;
  bottom: 0;

  padding: 1.6rem;
  width: 100%;
  max-width: 43rem;
  height: 11.4rem;

  box-shadow: 0 -2rem 2rem 0 rgba(107, 117, 136, 0.1);
`;
const Range = styled.div`
  display: flex;
  gap: 6.4rem;
  justify-content: center;

  margin-top: 0.3rem;

  & > span {
    ${({ theme }) => theme.fonts.body_regular_16};
    color: ${({ theme }) => theme.colors.gray};
  }
  & > span:nth-child(2) {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.4rem 0rem;
  width: 100%;

  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray};

  ${({ theme }) => theme.fonts.body_bold_14};
  color: ${({ theme }) => theme.colors.white};
`;
